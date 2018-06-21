/**
 * Utils for:
 * ЭФ_ЛС_ПДБК
 */
angular
    .module('bills.ef-ls-pdbk-utils', [
        'lodash',
        'common.dialogs',
        'ru.lanit.hcs.bills.rest.BillsService',
        'ru.lanit.hcs.bills.rest.AcquiringService',
        'bills.filters',
        'common.utils',
        'common.filter'
    ])
/**
public enum ru.lanit.hcs.bills.api.dto.ServiceType {
     * Жилищная услуга
    HOUSING_SERVICE,
     * Коммунальная услуга
    MUNICIPAL_SERVICE,
     * Дополнительная услуга
    ADDITIONAL_SERVICE,
     *  Неустойки и судебные расходы
    PENALTIES_SERVICE,
     * Вид коммунального ресурса
    MUNICIPAL_RESOURCE
}
*/
    .constant('BILLS_ACCOUNT_SERVICE_TYPE', {
        'HOUSING_SERVICE': 'HOUSING_SERVICE',
        'MUNICIPAL_SERVICE': 'MUNICIPAL_SERVICE',
        'ADDITIONAL_SERVICE': 'ADDITIONAL_SERVICE',
        'PENALTIES_SERVICE': 'PENALTIES_SERVICE',
        'MUNICIPAL_RESOURCE': 'MUNICIPAL_RESOURCE'
    })
    .factory('EfLsPdbkUtils', [
        '$q', 'Auth', 'commonDialogs', 'BillsMessageFactory', '$BillsService', '$AcquiringService',
        'BILLS_ACCOUNT_SERVICE_TYPE', 'AccountPeriodUtils',
        function ($q, Auth, commonDialogs, BillsMessageFactory, $BillsService, $AcquiringService,
            BILLS_ACCOUNT_SERVICE_TYPE, AccountPeriodUtils) {

            function getNsiRef(model) {
                return {guid: model.guid, code: model.code};
            }

            /**
             * iterate by all account services and create PaymentReceiverServiceDTO for each service
             */
            function iterateByAccountServices(accountServices, handler) {
                // TODO: accountServices.penaltiesServices may contains duplicate services
                // var servicesSet = {};
                /**
                 * for each iteration create:
                 * PaymentReceiverServiceDTO {
                 * Услуга
                 * private NsiRef service;
                 *
                 * Наименование услуги
                 * private String serviceName;
                 *
                 * Вид услуги
                 * private ServiceType serviceType;
                 * }
                 */
                angular.forEach(accountServices.housingServices, function(housingService) {
                    var paymentReceiverService = {
                        service: getNsiRef(housingService.charge.housingService),
                        serviceName: housingService.charge.housingService.housingServiceName,
                        serviceType: BILLS_ACCOUNT_SERVICE_TYPE.HOUSING_SERVICE
                    };
                    handler(housingService, paymentReceiverService, accountServices.housingServices);
                    //paymentDocumentServiceCharges.housingServiceCharges.push(resultCharge);
                });

                // КР
                if (accountServices.capitalRepairCharge) {
                    var paymentReceiverService = {
                        service: getNsiRef(accountServices.capitalRepairCharge.charge.housingService),
                        serviceName: accountServices.capitalRepairCharge.charge.housingService.housingServiceName,
                        serviceType: BILLS_ACCOUNT_SERVICE_TYPE.HOUSING_SERVICE
                    };

                    handler(accountServices.capitalRepairCharge, paymentReceiverService, null);
                    //paymentDocumentServiceCharges.housingServiceCharges.push(resultCharge);
                }

                angular.forEach(accountServices.municipalServices, function(municipalService) {
                    var paymentReceiverService = {
                        service: getNsiRef(municipalService.charge.service),
                        serviceName: municipalService.charge.service.mainMunicipalServiceName,
                        serviceType: BILLS_ACCOUNT_SERVICE_TYPE.MUNICIPAL_SERVICE
                    };

                    handler(municipalService, paymentReceiverService, accountServices.municipalServices);
                    //paymentDocumentServiceCharges.mainMunicipalServiceCharges.push(resultCharge);
                });

                // TODO: municipalResources should be skiped to add payment information
                angular.forEach(accountServices.municipalResourcesInApartmentBuilding, function(municipalService) {
                    var paymentReceiverService = {
                        service: getNsiRef(municipalService.charge.service),
                        serviceName: municipalService.charge.service.municipalResourceName,
                        serviceType: BILLS_ACCOUNT_SERVICE_TYPE.MUNICIPAL_RESOURCE
                    };

                    // TODO: skip call handler
                    //handler(municipalService, paymentReceiverService, accountServices.municipalResourcesInApartmentBuilding);

                    //paymentDocumentServiceCharges.municipalResourceCharges.push(resultCharge);
                });

                angular.forEach(accountServices.additionalServices, function(additionalService) {
                    var paymentReceiverService = {
                        service: getNsiRef(additionalService.charge.additionalServiceType),
                        serviceName: additionalService.charge.additionalServiceType.additionalServiceTypeName
                    };

                    // HCS-49985 использование спец. флага указывающий что услуга была перенесена из жилищных
                    if (additionalService.transferredFromHousing) {
                        paymentReceiverService.serviceType = BILLS_ACCOUNT_SERVICE_TYPE.HOUSING_SERVICE;
                    } else {
                        paymentReceiverService.serviceType = BILLS_ACCOUNT_SERVICE_TYPE.ADDITIONAL_SERVICE;
                    }

                    handler(additionalService, paymentReceiverService, accountServices.additionalServices);

                    // HCS-49985 использование спец. флага указывающий что услуга была перенесена из жилищных
                    //if (additionalService.transferredFromHousing) {
                        //// TODO: требование ЛАНИТ услугу страхование отображать не в жилищных, а в дополнительных
                        //// перевод обратно в жилищные
                        //paymentDocumentServiceCharges.housingServiceCharges.push(resultCharge);
                    //} else {
                        //paymentDocumentServiceCharges.additionalServiceTypeCharges.push(resultCharge);
                    //}
                });

                angular.forEach(accountServices.penaltiesServices, function(penaltiesService) {
                    var paymentReceiverService = {
                        service: getNsiRef(penaltiesService.charge.service),
                        serviceName: penaltiesService.charge.service.chargeType,
                        serviceType: BILLS_ACCOUNT_SERVICE_TYPE.PENALTIES_SERVICE
                    };

                    handler(penaltiesService, paymentReceiverService, accountServices.penaltiesServices);
                    //paymentDocumentServiceCharges.penaltiesServiceCharges.push(resultCharge);
                });
            }

            /**
             * create PaymentReceiverWithServicesDTO
             */
            function createPaymentReceiverWithServicesDTO(paymentReceiverDTO) {
                return {
                    allServices: false,
                    /**
                     * array of PaymentReceiverServiceDTO
                     * Услуга
                     * private NsiRef service;
                     * Наименование услуги
                     * private String serviceName;
                     * Вид услуги
                     * private ServiceType serviceType;
                     */
                    services: [],
                    /* ЭФ_ЛС_ПДБК.33 «Сумма по получателю» */
                    total: null,
                    paymentInformation: paymentReceiverDTO.paymentInformation,
                    capitalRepairPaymentInformation: paymentReceiverDTO.capitalRepairPaymentInformation
                };
            }

            /**
             * add payment information to paymentDocument.paymentReceiverWithServicesDTOList.
             * This fuction is called in auto mode - during payment document creation
             */
            function addAutoPaymentInformation(accountServices, paymentDocument, account, paymentReceiverDTO) {

                var paymentWithServices = createPaymentReceiverWithServicesDTO(paymentReceiverDTO);

                var list = paymentDocument.paymentReceiverWithServicesDTOList;
                if(list.length) {
                    // if list is not empty then services is not added
                } else {
                    // list empty so add all penalties 
                    // not kr pi
                    if(paymentReceiverDTO.paymentInformation) {
                        iterateByAccountServices(accountServices, function(accountService, paymentReceiverService) {
                            if(paymentReceiverService.serviceType === BILLS_ACCOUNT_SERVICE_TYPE.PENALTIES_SERVICE) {
                                paymentWithServices.services.push(paymentReceiverService);
                                accountService.charge.paymentReceiverDTO = paymentReceiverDTO;
                            }
                        });
                    }
                }

                list.push(paymentWithServices);
                return paymentWithServices;
            }

            /**
             * add payment information to paymentDocument.paymentReceiverWithServicesDTOList
             * call by user operation: choice payment information
             */
            function addManualPaymentInformations(accountServices, paymentDocument, account, vbprResult) {
                var list = paymentDocument.paymentReceiverWithServicesDTOList;
                angular.forEach(vbprResult.paymentInformations, function(pi) {
                    var paymentReceiverDTO = {
                        paymentInformation: pi,
                        capitalRepairPaymentInformation: null
                    };
                    var paymentWithServices = createPaymentReceiverWithServicesDTO(paymentReceiverDTO);
                    if(!list.length) {
                        paymentWithServices.allServices = true; 

                        // add all services to paymentWithServices
                        iterateByAccountServices(accountServices, function(accountService, paymentReceiverService) {
                            // fill only accountService.charge.paymentReceiverDTO.
                            // paymentWithServices.services is empty
                            accountService.charge.paymentReceiverDTO = paymentReceiverDTO;
                        });
                    } else if (list.length === 1 && list[0].allServices) { // reset allService
                        // TODO: set first allServices=false because more the one payment information
                        var firstPaymentWithServices = list[0];
                        firstPaymentWithServices.allServices = false; 
                        firstPaymentWithServices.services = [];
                        iterateByAccountServices(accountServices, function(accountService, paymentReceiverService) {
                            firstPaymentWithServices.services.push(paymentReceiverService);
                        });
                    }
                    list.push(paymentWithServices);
                });
                angular.forEach(vbprResult.capitalRepairPaymentInformations, function(pi) {
                    var paymentReceiverDTO = {
                        paymentInformation: null,
                        capitalRepairPaymentInformation: pi
                    };
                    var paymentWithServices = createPaymentReceiverWithServicesDTO(paymentReceiverDTO);
                    if(!list.length) { // length == 0
                        paymentWithServices.allServices = true; 

                        // add all services to paymentWithServices
                        iterateByAccountServices(accountServices, function(accountService, paymentReceiverService) {
                            // fill only accountService.charge.paymentReceiverDTO.
                            // paymentWithServices.services is empty
                            accountService.charge.paymentReceiverDTO = paymentReceiverDTO;
                        });
                    } else if (list.length === 1 && list[0].allServices) {
                        // set first allServices=false because more the one payment information
                        var firstPaymentWithServices = list[0];
                        firstPaymentWithServices.allServices = false; 
                        firstPaymentWithServices.services = [];
                        iterateByAccountServices(accountServices, function(accountService, paymentReceiverService) {
                            firstPaymentWithServices.services.push(paymentReceiverService);
                        }); 
                    }
                    list.push(paymentWithServices);
                });
            }

            function updateOtherPaymentReceiverDTO(receiverService, paymentReceiverDTO, otherAssociations) {
                for(var i=0; i<otherAssociations.length; i++) {
                    var association = otherAssociations[i];
                    // TODO: compare services by code
                    if(association.paymentReceiverService.service.code === receiverService.service.code) {
                        association.accountService.charge.paymentReceiverDTO = paymentReceiverDTO;
                        return;
                    }
                }
            }

            function removeUnselectedOtherPaymentReceiverDTO(otherSelectedServices, otherAssociations) {
                angular.forEach(otherAssociations, function(association) {
                    var service = _.find(otherSelectedServices, function(item) {
                        return item.service.code === association.paymentReceiverService.service.code;
                    });
                    // not found - service was unselected
                    if(!service) {
                        association.accountService.charge.paymentReceiverDTO = null;
                    }
                });
            }

            /**
             * 2.39 ВИ_ЛС_61: Добавление получателя платежа
             * Система скрывает из списка наименования видов услуг, которые были выбраны в списках 
             * ЭФ_ЛС_ПДБК.32 в других строках ЭФ_ЛС_ПДБК.28.
             * 
             * Система не скрывает из списка наименования видов начислений (PENALTIES_SERVICE), которые были выбраны в списках
             * ЭФ_ЛС_ПДБК.32 в других строках ЭФ_ЛС_ПДБК.28.
             *
             * call when paymentDocument.paymentReceiverWithServicesDTOList[i].services is change
             */
            function updateAvailablePaymentRecieverServices(accountServices, paymentDocument, account,
                isUpdatePaymentReceiverDTO) {

                var availableOtherServices = [];
                var allPenaltiesServices = [];
                var capitalRepairService = null;
                // unique penalties
                var penaltiesSet = {};
                var otherAssociations = [];
                // all other (except penalties) selected services
                var otherSelectedServices = [];

                iterateByAccountServices(accountServices, function(accountService, paymentReceiverService) {
                    if(accountServices.capitalRepairCharge && (accountServices.capitalRepairCharge == accountService)) {
                        capitalRepairService = paymentReceiverService;
                    }

                    if(paymentReceiverService.serviceType === BILLS_ACCOUNT_SERVICE_TYPE.PENALTIES_SERVICE) {
                        if(!penaltiesSet[paymentReceiverService.service.code]) {
                            allPenaltiesServices.push(paymentReceiverService);
                            penaltiesSet[paymentReceiverService.service.code] = true;
                        }
                    } else {
                        availableOtherServices.push(paymentReceiverService);
                        otherAssociations.push({
                            paymentReceiverService: paymentReceiverService,
                            accountService: accountService
                        });
                    }
                });

                // iterate by PaymentReceiverWithServicesDTO
                angular.forEach(paymentDocument.paymentReceiverWithServicesDTOList, function(paymentReceiverWithServices) {
                    var paymentReceiverDTO = {
                        paymentInformation: paymentReceiverWithServices.paymentInformation,
                        capitalRepairPaymentInformation: paymentReceiverWithServices.capitalRepairPaymentInformation
                    };
                    paymentReceiverWithServices.availableServices = [];
                    if(paymentReceiverWithServices.capitalRepairPaymentInformation) {
                        // for KR available only KR service
                        paymentReceiverWithServices.availableServices.push(capitalRepairService);

                        if(isUpdatePaymentReceiverDTO) {
                            // TODO here list of services should be contains only one - it is capital repair service
                            angular.forEach(paymentReceiverWithServices.services, function(service) {
                                otherSelectedServices.push(service);
                                updateOtherPaymentReceiverDTO(service, paymentReceiverDTO, otherAssociations);
                            });
                        }

                        return;
                    }

                    var availablePenalties = angular.copy(allPenaltiesServices);
                    // choices array
                    var selectedPenalties = [];
                    var selectedOthers = [];

                    // iterate by PaymentReceiverServiceDTO
                    angular.forEach(paymentReceiverWithServices.services, function(service) {
                        // penalties are uinique on pi 
                        if(service.serviceType === BILLS_ACCOUNT_SERVICE_TYPE.PENALTIES_SERVICE) {
                            selectedPenalties.push(service);
                            // add only penalties is not exitsting 
                            for(var i=0; i<availablePenalties.length; i++) {
                                var penaltie = availablePenalties[i];
                                // TODO: compare services by code
                                if(penaltie.service.code === service.service.code) {
                                    // remove and start check next service
                                    availablePenalties.splice(i, 1);
                                    return;
                                }
                            }
                        } else {
                            if(isUpdatePaymentReceiverDTO) {
                                otherSelectedServices.push(service);
                                updateOtherPaymentReceiverDTO(service, paymentReceiverDTO, otherAssociations);
                            }
                            selectedOthers.push(service);
                            for(var j=0; j<availableOtherServices.length; j++) {
                                var otherService = availableOtherServices[j];
                                // TODO: compare services by code
                                if(otherService.service.code === service.service.code) {
                                    // service already exists, so remove it form available
                                    availableOtherServices.splice(j, 1);
                                    // remove and start check next service
                                    return;
                                }
                            }
                        }

                    });

                    // list is only for UI
                    // availabel services have to contains:
                    // + all penalties (selected + (all - selected))
                    // + other selected 
                    // + other not selected in all list
                    // FIXME: service should be sorted
                    paymentReceiverWithServices.availableServices = 
                        selectedOthers.concat(availablePenalties).concat(selectedPenalties);

                });

                angular.forEach(paymentDocument.paymentReceiverWithServicesDTOList, function(paymentReceiverWithServices) {
                    if(!paymentReceiverWithServices.capitalRepairPaymentInformation) {
                        // FIXME: service should be sorted
                        paymentReceiverWithServices.availableServices = availableOtherServices.concat(
                            paymentReceiverWithServices.availableServices);
                    }
                });

                if(isUpdatePaymentReceiverDTO) {
                    removeUnselectedOtherPaymentReceiverDTO(otherSelectedServices, otherAssociations);
                    removeUnselectedPenaltiesPaymentReceiverDTO(xxx, xxx);
                }
            }


            /**
             * Call when user select service by ЭФ_ЛС_ПДБК.32 «Виды услуг»
             *
             * add or remove paymentReceiverService from list paymentWithServices.services
             * update charge paymentReceiverDTO.
             * Create penalties service duplication if need
             *
             * call when paymentDocument.paymentReceiverWithServicesDTOList[i].services is change
             */
            function updatePaymentRecieverServices(accountServices, paymentDocument, account) {

                updateAvailablePaymentRecieverServices(accountServices, paymentDocument, account);

                var allServices = [];
                // add all to available list
                iterateByAccountServices(accountServices, function(accountService, paymentReceiverService, container) {
                    allServices.push({
                        accountService: accountService,
                        paymentReceiverService: paymentReceiverService,
                        // account service container
                        container: container
                    });
                });

                // iterate by PaymentReceiverWithServicesDTO
                angular.forEach(paymentDocument.paymentReceiverWithServicesDTOList, function(paymentReceiverWithServices) {
                    // iterate by PaymentReceiverServiceDTO
                    angular.forEach(paymentReceiverWithServices.services, function(ps) {

                        // find association for paymentReceiverService
                        for(var i=0; i<allServices.length; i++) {
                            var prService = allServices[i];
                            // TODO: compare services by code
                            if(prService.service.code === paymentReceiverService.service.code) {
                                // service already exists, so remove it form available
                                availableServices.splice(i, 1);
                                // exit from current iteration
                                return;
                            }
                        }
                        
                    });
                });

            }

            function findCapitalRepairPaymentInformation(accountServices, paymentDocument, account) {
                var request = {
                    accountGuid: account.guid,
                };

                var isCreation = paymentDocument.guid ? false : true;
                if (isCreation) {
                    var period = AccountPeriodUtils.transformPeriodFromString(paymentDocument.accountPeriod);
                    request.periodYear = period.periodYear;
                    request.periodMonth = period.periodMonth;
                } else {
                    request.periodYear = paymentDocument.year;
                    request.periodMonth = paymentDocument.month;
                }
                return $BillsService.findCapitalRepairPaymentInformation(request, {page: 1, itemsPerPage: 2});
            }

            function findPaymentInformation(accountServices, paymentDocument, account) {
                var request = {
                    status: 'ACTUAL',
                    organizationGuid: Auth.user.orgGuid,
                };
                return $BillsService.findPaymentInformation(request, {page: 1, itemsPerPage: 2});
            }

            /**
             * see ВИ_ЛС_31: Создание платежного документа
             * sep 6, 7, 8
             */
            function initPaymentInformation(accountServices, paymentDocument, account) {
                var promises = {};

                if(account.accountType === 'CAPITAL_REPAIR') {
                    // search KR
                    promises.findCapitalRepairPaymentInformation = findCapitalRepairPaymentInformation(
                        accountServices, paymentDocument, account);
                } else  {
                    promises.findPaymentInformation = findPaymentInformation(accountServices, paymentDocument, account);
                    if(accountServices.capitalRepairCharge) {
                        // search KR
                        promises.findCapitalRepairPaymentInformation = findCapitalRepairPaymentInformation(
                            accountServices, paymentDocument, account);
                    }
                }

                return $q.all(promises).then(function(results) {
                    var result = results.findPaymentInformation;
                    // only one
                    if(result && result && result.items && (result.items.length === 1)) {
                        addAutoPaymentInformation(accountServices, paymentDocument, account, {
                            paymentInformation: result.items[0]
                        });
                    }

                    result = results.findCapitalRepairPaymentInformation;
                    // only one
                    if(result && result && result.items && (result.items.length === 1)) {
                        addAutoPaymentInformation(accountServices, paymentDocument, account, {
                            capitalRepairpaymentInformation: result.items[0]
                        });
                    }

                    updateAvailablePaymentRecieverServices(accountServices, paymentDocument, account, false);
                });
            }

            return {
                addManualPaymentInformations: addManualPaymentInformations,
                initPaymentInformation: initPaymentInformation,
                updateAvailablePaymentRecieverServices: updateAvailablePaymentRecieverServices
            };
        }
    ]);
