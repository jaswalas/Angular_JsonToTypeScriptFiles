
export const json = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "image":
    {
        "url": "images/0001.jpg",
        "width": 200,
        "height": 200
    },
    "thumbnail": [
        {
            "url": "images/thumbnails/0001.jpg",
            "width": 32,
            "height": 32
        },

        {
            "url": "images/thumbnails/0002.jpg",
            "width": 100,
            "height": 99
        }

    ]
}

/*export const json = {
    "swagger": "2.0",
    "info": {
      "title": "HealthGuideCoveredMembers ",
      "description": "This Service is used to retrieve the list of other covered members on each contract for hte member on the input",
      "contact": {
        "name": "AD02751"
      },
      "version": "1"
    },
    "host": "virtual.api.anthem.com",
    "basePath": "/v1/healthguide/members",
    "tags": [
      {
        "name": "Covered Members",
        "description": "To retrieve the list of other covered members on each contract/Eligibility for the member on the input."
      }
    ],
    "schemes": [
      "https"
    ],
    "paths": {
      "/covered-members": {
        "get": {
          "tags": [
            "Covered Members",
            "covered members"
          ],
          "consumes": [
            "application/json"
          ],
          "produces": [
            "application/json"
          ],
          "security": [
            {
              "ApiKeyPolicy": []
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "schema": {
                "$ref": "#/definitions/coveredMembersResponse"
              }
            },
            "400": {
              "description": "BAD REQUEST"
            },
            "401": {
              "description": "UNAUTHORIZED"
            },
            "500": {
              "description": "TECHNICAL SERVICE FAILURE"
            }
          },
          "description": "covered members",
          "operationId": "covered members",
          "parameters": [
            {
              "name": "mbruid",
              "in": "query",
              "required": true,
              "type": "string",
              "format": "string"
            },
            {
              "name": "apikey",
              "in": "header",
              "required": true,
              "description": "Security Provided by APIGEE",
              "type": "string",
              "format": "string"
            },
            {
              "name": "contractuid",
              "in": "query",
              "description": "Contract UID",
              "type": "string",
              "format": "string"
            },
            {
              "name": "meta-senderapp",
              "in": "header",
              "type": "string",
              "format": "string"
            },
            {
              "name": "meta-transid",
              "in": "header",
              "type": "string",
              "format": "string"
            },
            {
              "name": "tenantid",
              "in": "header",
              "required": true,
              "type": "string",
              "format": "string"
            },
            {
              "name": "authorization",
              "in": "header",
              "type": "string",
              "format": "string"
            }
          ]
        }
      }
    },
    "securityDefinitions": {
      "ApiKeyPolicy": {
        "type": "apiKey",
        "in": "header",
        "name": "apikey"
      }
    },
    "definitions": {
      "coveredMembersResponse": {
        "required": [
          "member"
        ],
        "type": "object",
        "properties": {
          "member": {
            "required": [
              "dob",
              "eligibility",
              "firstNm",
              "lastNm",
              "mbrUid"
            ],
            "type": "object",
            "properties": {
              "mbrUid": {
                "type": "string",
                "format": "string"
              },
              "webGuid": {
                "type": "string",
                "format": "string"
              },
              "firstNm": {
                "type": "string",
                "format": "string"
              },
              "middleNm": {
                "type": "string",
                "format": "string"
              },
              "lastNm": {
                "type": "string",
                "format": "string"
              },
              "dob": {
                "type": "string",
                "format": "string"
              },
              "statusCd": {
                "required": [
                  "code"
                ],
                "description": "statusCd",
                "type": "object",
                "properties": {
                  "code": {
                    "description": "Status Code",
                    "type": "string",
                    "format": "string"
                  },
                  "name": {
                    "description": "Status name",
                    "type": "string",
                    "format": "string"
                  },
                  "description": {
                    "description": "Status Description",
                    "type": "string",
                    "format": "string"
                  }
                }
              },
              "eligibility": {
                "minItems": 1,
                "type": "array",
                "items": {
                  "required": [
                    "contract",
                    "coverage",
                    "effectiveDt",
                    "hcId",
                    "mbrSequenceNbr",
                    "terminationDt"
                  ],
                  "type": "object",
                  "properties": {
                    "hcId": {
                      "type": "string",
                      "format": "string"
                    },
                    "mbrSequenceNbr": {
                      "type": "string",
                      "format": "string"
                    },
                    "effectiveDt": {
                      "type": "string",
                      "format": "string"
                    },
                    "terminationDt": {
                      "description": "terminationDt",
                      "type": "string",
                      "format": "string"
                    },
                    "contract": {
                      "required": [
                        "contractId",
                        "group",
                        "sourceSystemId",
                        "statusCd",
                        "subscriberId"
                      ],
                      "type": "object",
                      "properties": {
                        "group": {
                          "required": [
                            "groupId",
                            "groupNm"
                          ],
                          "type": "object",
                          "properties": {
                            "groupId": {
                              "type": "string",
                              "format": "string"
                            },
                            "groupNm": {
                              "type": "string",
                              "format": "string"
                            }
                          }
                        },
                        "subscriberId": {
                          "type": "string",
                          "format": "string"
                        },
                        "sourceSystemId": {
                          "type": "string",
                          "format": "string"
                        },
                        "contractId": {
                          "type": "string",
                          "format": "string"
                        },
                        "statusCd": {
                          "required": [
                            "code"
                          ],
                          "description": "statusCd",
                          "type": "object",
                          "properties": {
                            "code": {
                              "description": "Status Code",
                              "type": "string",
                              "format": "string"
                            },
                            "name": {
                              "description": "Status code name",
                              "type": "string",
                              "format": "string"
                            },
                            "description": {
                              "description": "Status description",
                              "type": "string",
                              "format": "string"
                            }
                          }
                        }
                      }
                    },
                    "coverage": {
                      "minItems": 1,
                      "type": "array",
                      "items": {
                        "required": [
                          "membersCovered",
                          "product"
                        ],
                        "type": "object",
                        "properties": {
                          "subgroupId": {
                            "type": "string",
                            "format": "string"
                          },
                          "product": {
                            "minItems": 1,
                            "type": "array",
                            "items": {
                              "required": [
                                "coverageTypeCd",
                                "productId"
                              ],
                              "type": "object",
                              "properties": {
                                "productId": {
                                  "description": "productId",
                                  "type": "string",
                                  "format": "string"
                                },
                                "coverageTypeCd": {
                                  "required": [
                                    "code"
                                  ],
                                  "type": "object",
                                  "properties": {
                                    "code": {
                                      "description": "Coverage Type Code",
                                      "type": "string",
                                      "format": "string"
                                    },
                                    "name": {
                                      "description": "Coverage Type Name",
                                      "type": "string",
                                      "format": "string"
                                    },
                                    "description": {
                                      "description": "Coverage Type Description",
                                      "type": "string",
                                      "format": "string"
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "membersCovered": {
                            "minItems": 1,
                            "description": "membersCovered",
                            "type": "array",
                            "items": {
                              "required": [
                                "dob",
                                "firstNm",
                                "genderCd",
                                "lastNm",
                                "mbrUid",
                                "memberEligibility"
                              ],
                              "type": "object",
                              "properties": {
                                "mbrUid": {
                                  "description": "mbrUid",
                                  "type": "string",
                                  "format": "string"
                                },
                                "firstNm": {
                                  "description": "firstNm",
                                  "type": "string",
                                  "format": "string"
                                },
                                "middleNm": {
                                  "type": "string",
                                  "format": "string"
                                },
                                "lastNm": {
                                  "description": "lastNm",
                                  "type": "string",
                                  "format": "string"
                                },
                                "namePrefix": {
                                  "description": "namePrefix",
                                  "type": "string",
                                  "format": "string"
                                },
                                "nameSuffix": {
                                  "description": "nameSuffix",
                                  "type": "string",
                                  "format": "string"
                                },
                                "dob": {
                                  "description": "dob",
                                  "type": "string",
                                  "format": "string"
                                },
                                "genderCd": {
                                  "required": [
                                    "code"
                                  ],
                                  "type": "object",
                                  "properties": {
                                    "code": {
                                      "description": "Gender Code",
                                      "type": "string",
                                      "format": "string"
                                    },
                                    "name": {
                                      "description": "Gender Name",
                                      "type": "string",
                                      "format": "string"
                                    },
                                    "description": {
                                      "description": "Gender Description",
                                      "type": "string",
                                      "format": "string"
                                    }
                                  }
                                },
                                "memberEligibility": {
                                  "required": [
                                    "effectiveDt",
                                    "hcId",
                                    "mbrSequenceNbr",
                                    "memberCoverage",
                                    "relationshipCd",
                                    "statusCd",
                                    "terminationDt"
                                  ],
                                  "type": "object",
                                  "properties": {
                                    "hcId": {
                                      "description": "hcId",
                                      "type": "string",
                                      "format": "string"
                                    },
                                    "mbrSequenceNbr": {
                                      "description": "mbrSequenceNbr",
                                      "type": "string",
                                      "format": "string"
                                    },
                                    "memberCoverage": {
                                      "minItems": 1,
                                      "description": "memberCoverage",
                                      "type": "array",
                                      "items": {
                                        "required": [
                                          "Product",
                                          "coverageEndDt",
                                          "coverageStartDt",
                                          "subgroupId"
                                        ],
                                        "type": "object",
                                        "properties": {
                                          "subgroupId": {
                                            "description": "subgroupId",
                                            "type": "string",
                                            "format": "string"
                                          },
                                          "coverageStartDt": {
                                            "description": "coverageStartDt",
                                            "type": "string",
                                            "format": "string"
                                          },
                                          "coverageEndDt": {
                                            "description": "coverageEndDt",
                                            "type": "string",
                                            "format": "string"
                                          },
                                          "Product": {
                                            "minItems": 1,
                                            "description": "Product",
                                            "type": "array",
                                            "items": {
                                              "required": [
                                                "coverageTypeCd",
                                                "productId"
                                              ],
                                              "type": "object",
                                              "properties": {
                                                "productId": {
                                                  "description": "productId",
                                                  "type": "string"
                                                },
                                                "coverageTypeCd": {
                                                  "required": [
                                                    "code"
                                                  ],
                                                  "description": "coverageTypeCd",
                                                  "type": "object",
                                                  "properties": {
                                                    "code": {
                                                      "description": "Coverage Type Code",
                                                      "type": "string",
                                                      "format": "string"
                                                    },
                                                    "name": {
                                                      "description": "Coverage Type Name",
                                                      "type": "string",
                                                      "format": "string"
                                                    },
                                                    "description": {
                                                      "description": "Coverage Type Description",
                                                      "type": "string",
                                                      "format": "string"
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "cancelReasonCd": {
                                            "required": [
                                              "code"
                                            ],
                                            "description": "Cancellation Reason Code",
                                            "type": "object",
                                            "properties": {
                                              "code": {
                                                "description": "Cancellation Reason Code",
                                                "type": "string",
                                                "format": "string"
                                              },
                                              "name": {
                                                "description": "Cancellation Reason Name",
                                                "type": "string",
                                                "format": "string"
                                              },
                                              "description": {
                                                "description": "Cancellation Reason Description",
                                                "type": "string",
                                                "format": "string"
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "relationshipCd": {
                                      "required": [
                                        "code"
                                      ],
                                      "description": "relationshipCd",
                                      "type": "object",
                                      "properties": {
                                        "code": {
                                          "description": "Relationship Code",
                                          "type": "string",
                                          "format": "string"
                                        },
                                        "name": {
                                          "description": "Relationship Name",
                                          "type": "string",
                                          "format": "string"
                                        },
                                        "description": {
                                          "description": "Relationship Description",
                                          "type": "string",
                                          "format": "string"
                                        }
                                      }
                                    },
                                    "effectiveDt": {
                                      "description": "effectiveDt",
                                      "type": "string",
                                      "format": "string"
                                    },
                                    "terminationDt": {
                                      "description": "terminationDt",
                                      "type": "string",
                                      "format": "string"
                                    },
                                    "statusCd": {
                                      "required": [
                                        "code"
                                      ],
                                      "description": "Status Code",
                                      "type": "object",
                                      "properties": {
                                        "code": {
                                          "description": "Status Code",
                                          "type": "string",
                                          "format": "string"
                                        },
                                        "name": {
                                          "description": "Status Name",
                                          "type": "string",
                                          "format": "string"
                                        },
                                        "description": {
                                          "description": "Status Description",
                                          "type": "string",
                                          "format": "string"
                                        }
                                      }
                                    },
                                    "contractUid": {
                                      "description": "Contract UID",
                                      "type": "string",
                                      "format": "string"
                                    },
                                    "cardIssueDt": {
                                      "description": "Card Issue Date",
                                      "type": "string",
                                      "format": "date"
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "cancelReasonCd": {
                            "required": [
                              "code"
                            ],
                            "description": "Cancellation Reason Code",
                            "type": "object",
                            "properties": {
                              "code": {
                                "description": "Code",
                                "type": "string",
                                "format": "string"
                              },
                              "name": {
                                "description": "Cancellation Reason Name",
                                "type": "string",
                                "format": "string"
                              },
                              "description": {
                                "description": "Cancellation Reason Description",
                                "type": "string",
                                "format": "string"
                              }
                            }
                          }
                        }
                      }
                    },
                    "contractUid": {
                      "description": "Contract UID",
                      "type": "string",
                      "format": "string"
                    },
                    "cardIssueDt": {
                      "description": "Card Issue Date",
                      "type": "string",
                      "format": "date"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "statusCd": {
        "required": [
          "code"
        ],
        "description": "statusCd",
        "type": "object",
        "properties": {
          "code": {
            "description": "Status Code",
            "type": "string",
            "format": "string"
          },
          "name": {
            "description": "Status code name",
            "type": "string",
            "format": "string"
          },
          "description": {
            "description": "Status description",
            "type": "string",
            "format": "string"
          }
        }
      }
    },
    "externalDocs": {
      "description": "Specification within Ignite Service Design Platform",
      "url": "https://10.0.0.145:8443/ICS/serviceSpecification.jsp?id=6380516"
    },
    "x-ignite-status": {
      "lifecycle": "In Construction - In Design",
      "inventory": "API - Core"
    },
    "x-ignite-discovery": {
      "profile": "application api service",
      "interfaceType": "REST"
    }
  }
  */
  