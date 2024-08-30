export const RESTAURANT_MENU_DATA = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "Kwality Walls Ice Cream and More",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [
              {
                id: "Order Online",
                title: "Order Online",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "739240",
              name: "Kwality Walls Ice Cream and More",
              city: "Gurgaon",
              slugs: {
                restaurant:
                  "kwality-walls-frozen-dessert-and-ice-cream-shop-huda-city-huda-city-9",
                city: "gurgaon",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/cf393bdd-34a8-41e3-962d-ba4b1a864a79_739240.JPG",
              locality: "sector 44",
              areaName: "Huda City",
              costForTwo: "20000",
              costForTwoMessage: "₹200 for two",
              cuisines: ["Ice Cream", "Desserts"],
              avgRating: 4.8,
              veg: true,
              feeDetails: {
                restaurantId: "739240",
                fees: [
                  {
                    name: "TYPE_DISTANCE",
                    fee: 3900,
                  },
                  {
                    name: "TYPE_TIME",
                  },
                ],
                totalFee: 3900,
                title: "Delivery Charge",
                amount: "3900",
                icon: "v1648635511/Delivery_fee_new_cjxumu",
                message: "<b>1.2 kms</b> | ₹39 Delivery fee will apply",
              },
              parentId: "582",
              avgRatingString: "4.8",
              totalRatingsString: "381 ratings",
              sla: {
                restaurantId: "739240",
                deliveryTime: 25,
                minDeliveryTime: 25,
                maxDeliveryTime: 30,
                lastMileTravel: 1.2,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 18,
                slaString: "25-30 MINS",
                lastMileTravelString: "1.2 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2024-08-30 03:00:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "Flat ₹100 off",
                shortDescriptionList: [
                  {
                    meta: "Flat ₹100 off on orders above ₹349",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Flat 175 off | Use FLAT175",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "Flat ₹100 off on orders above ₹349 | Use code FLAT100",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Flat 175 off | Use code FLAT175",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString:
                "kwality-walls-frozen-dessert-and-ice-cream-shop-huda-city-huda-city-9",
              multiOutlet: true,
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message:
                    "RITIK TRADERS: H NO- 449,VILLAGE-KANAHI (73),NEAR WINE SHOP ,OPP- SEC-44,GURUGRAM, Kanahi(73), Gurgaon, Gurugram, Haryana - 122003(HUL-I320415P1255)",
                },
                {
                  title: "Cuisines",
                  message: "Ice Cream,Desserts",
                },
              ],
              totalRatings: 381,
              aggregatedDiscountInfoV2: {
                header: "Flat ₹100 off",
                shortDescriptionList: [
                  {
                    meta: "Flat ₹100 off on orders above ₹349",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Flat 175 off | Use FLAT175",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "Flat ₹100 off on orders above ₹349 | Use code FLAT100",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Flat 175 off | Use code FLAT175",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              nudgeBanners: [
                {
                  minValue: 244,
                  maxValue: 349,
                  priority: 1,
                  couponCode: "FLAT100",
                  discountInfo: {
                    discountType: "Flat",
                    value: 100,
                  },
                  lockedMessage:
                    "Add items worth ₹<amount> to save ₹100 | Code FLAT100",
                  unlockedMessage:
                    "FLAT100 Coupon Unlocked! Use it to save ₹100",
                  logoCtx: {},
                },
                {
                  minValue: 454,
                  maxValue: 649,
                  priority: 2,
                  couponCode: "FLAT175",
                  discountInfo: {
                    discountType: "Flat",
                    value: 175,
                  },
                  lockedMessage:
                    "Add items worth ₹<amount> to save ₹175 | Code FLAT175",
                  unlockedMessage:
                    "FLAT175 Coupon Unlocked! Use it to save ₹175",
                  logoCtx: {},
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/739240",
              },
              expectationNotifiers: [
                {
                  text: "<b>1.2 kms</b> | ₹39 Delivery fee will apply",
                  icon: {
                    imageId: "v1648635511/Delivery_fee_new_cjxumu",
                  },
                  popup: {
                    cta: {},
                  },
                  type: "DISTANCE_FEE_NON_FOOD_LM",
                  enrichedText: "<b>1.2 kms</b> | ₹39 Delivery fee will apply",
                  halfCardPopup: {
                    halfCardPopupHeader: {},
                  },
                  trailingIcon: {},
                },
              ],
              ratingSlab: "RATING_SLAB_5",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: "28.447560,77.072876",
              backgroundImageOverlayInfo: {},
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
              scrollBar: {},
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "Extra ₹15 off",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/d07196b25b85d1fd9951e10c255ab737",
                      offerIds: ["75f8b3f9-4666-4e15-95d4-2cdb772dbd8f"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      description: "APPLICABLE OVER & ABOVE COUPONS",
                      offerType: "offers",
                      restId: "739240",
                      offerLogo:
                        "rng/md/ads/production/d07196b25b85d1fd9951e10c255ab737",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹100 OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["232e1eed-a131-42bd-bee1-84c61f823a97"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FLAT100",
                      description: "ABOVE ₹349",
                      offerType: "offers",
                      restId: "739240",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹175 OFF",
                      offerTagColor: "#E46D47",
                      offerIds: ["f0b8da8b-b61a-4ba6-a5b2-15cdc1183b06"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FLAT175",
                      description: "ABOVE ₹649",
                      offerType: "offers",
                      restId: "739240",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "10% OFF UPTO ₹150",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2024/7/31/224113cb-129f-4263-bc1d-92c84fd3ed8c_HSBC.png",
                      offerIds: ["4cab15ad-5a73-4aa1-91e0-f945bd61c465"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE HSBCFEST",
                      description: "ABOVE ₹499",
                      offerType: "offers",
                      restId: "739240",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2024/7/31/224113cb-129f-4263-bc1d-92c84fd3ed8c_HSBC.png",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "30% OFF UPTO ₹150",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2024/7/31/16d410a3-56fd-4a93-8f21-373180d89ce4_AxisMenuLogo.png",
                      offerIds: ["a2812cd5-616f-47e9-81e6-04d650f77d20"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE AXIS30",
                      description: "ABOVE ₹200",
                      offerType: "offers",
                      restId: "739240",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2024/7/31/16d410a3-56fd-4a93-8f21-373180d89ce4_AxisMenuLogo.png",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                ],
                habitMilestoneInfo: {
                  callout: {},
                },
                loyaltyDiscoverPresentationInfo: {
                  logoCtx: {},
                },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      isPureVeg: true,
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {
                        attributes: {
                          displayText: "Ratings 4.0+",
                        },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: {
                        attributes: {
                          displayText: "VEG",
                        },
                      },
                      nonvegFilter: {
                        attributes: {
                          displayText: "NONVEG",
                        },
                      },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401200",
                              name: "Choco Brownie Fudge Party Pack 700ml",
                              category: "Kwality Wall's New Arrivals ",
                              description:
                                "Choco Brownie Fudge is a delectable treat that combines the richness of chocolate with the indulgence of fudgy brownies. This frozen dessert features a velvety chocolate base swirled with generous chunks of fudge brownie pieces throughout Kcal/Serving129",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/da0d254d-766d-42d1-89b5-6b9bf3595542_7bc0ce81-382b-4702-8bee-b339d3d860a7.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "18 ratings",
                                  ratingCountV2: "18",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "133926499",
                              name: "Feast Cadbury Crackle 70ml",
                              category: "Kwality Wall's New Arrivals ",
                              description:
                                "Experience the delight of Cadbury Crackle chocolate in a Kwality Walls Feast. Every bite has the deliciousness of Cadbury crackle Chocolate with signature hard chocolate. For any chocolate lover",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/7ba31cec-da68-4025-a3b3-29c32732ad2a_c89cbdc8-73f6-4e06-846c-f74136d5f679.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "26 ratings",
                                  ratingCountV2: "26",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120617553",
                              name: "Cornetto Double Chocolate 105ml",
                              category: "Cornetto ",
                              description:
                                "Duo of milk and dark chocolate topped with chocolate sauce, chocochips in a crunchy waffle cone. Kcal/Serving184",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/072ff94b-f6a6-4fa6-ae0c-9412502f685d_8c489616-d8f2-4981-9841-f9e13b1bc76f.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "59 ratings",
                                  ratingCountV2: "59",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401184",
                              name: "Magnum Almond Ice Cream, 80ml",
                              category: "Magnum Ice Cream",
                              description:
                                "Expertly crafted icecream with Madagascar vanilla, crunchy Australian almonds and Belgian chocolate. Kcal/Serving223",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/13219cfb-a3f1-422b-b5a4-1980e74cd9bb_87977043-247e-433f-ae4a-cd90ba7edb04.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "32 ratings",
                                  ratingCountV2: "32",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401186",
                              name: "Butterscotch Tub, 700ml",
                              category: "Family Tubs",
                              description:
                                "Creamy butterscotch tub loaded with chunks of caramel coated cashew nuts. Kcal/Serving126",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/f781d918-f42e-4d88-819c-2d15aef8151e_b7571308-1d58-44e4-9740-acbec50849c7.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121916240",
                              name: "Vanilla Party Pack [700ml x 2pcs]",
                              category: " Party Packs",
                              description:
                                "Rich creamy vanilla dessert thats more vanilla-tasting than any vanilla you have ever tasted in all of vanillas entirety. Kcal/Serving224",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/d63b712e-309d-49d9-ad77-7c9161b6755a_2311cb5e-24e1-4903-9e0a-0be84fb0c1b1.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 19800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "33 ratings",
                                  ratingCountV2: "33",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401167",
                              name: "Blackcurrant & Raisins Party Pack, 700ml",
                              category: " Party Packs",
                              description:
                                "Creamy  blend of black currant berries and raisins. A refreshing summer treat! Kcal/Serving114",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/39ab2e93-b0aa-45ba-831d-a3bca81470fc_aaca35b9-15a7-43ca-9358-af93cbb7af9a.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 18500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121916228",
                              name: "Cassatta [125ml x 2pcs]",
                              category: "Duo Packs",
                              description:
                                "Creamy rainbow trio between crunchy cashew nuts, tutti frutti and soft cake. Kcal/Serving157",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/b05f74fd-a1be-4778-af3b-acc70c896a2e_154b39df-4d28-4432-97e2-a3a1432ffa78.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "30 ratings",
                                  ratingCountV2: "30",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121916229",
                              name: "Black Forest Feast  - [70ml x 3pcs]",
                              category: "Duo Packs",
                              description:
                                "Black Forest cake meets Feast!\nCake pieces through layers of Feast with a solid chocolate surprise at the end. Kcal/Serving249",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/febd3709-6475-41c5-8520-f8c758d00517_316dc043-8cc4-4739-8e0b-e352c478f69c.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 13500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "19 ratings",
                                  ratingCountV2: "19",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121916233",
                              name: "Sandwich Chocolate and Vanilla [90ml x 2pcs]",
                              category: "Duo Packs",
                              description:
                                "Looking for a sweet snack? A hearty delicious sandwich filled creamy vanilla and yummy chocolate between two crunchy biscuits. Kcal/Serving168",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/6f77999c-7196-4ddf-9548-d864c77c5355_79075a28-decc-409e-bcce-0a7d99970c28.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "14 ratings",
                                  ratingCountV2: "14",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      type: "CATEGORY_TYPE_RECOMMENDED",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Slow ChurnNew Artisanal Fruit Ice Cream",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401206",
                              name: "Slow Churn Pink Guava Ice Cream 500 ML",
                              category:
                                "Slow ChurnNew Artisanal Fruit Ice Cream",
                              description:
                                "Indulge in an artisanal  icecream made by slowly churning fresh milk cream and Pink Guavas. Delight natural fruit ice cream lovers. Kcal/Serving129",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/29dc7a86-1e0e-4c26-aeb8-79245d859068_8219e604-74ef-450a-a8d8-3280b573a929.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 37500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Kwality Wall's New Arrivals ",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401200",
                              name: "Choco Brownie Fudge Party Pack 700ml",
                              category: "Kwality Wall's New Arrivals ",
                              description:
                                "Choco Brownie Fudge is a delectable treat that combines the richness of chocolate with the indulgence of fudgy brownies. This frozen dessert features a velvety chocolate base swirled with generous chunks of fudge brownie pieces throughout Kcal/Serving129",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/da0d254d-766d-42d1-89b5-6b9bf3595542_7bc0ce81-382b-4702-8bee-b339d3d860a7.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "18 ratings",
                                  ratingCountV2: "18",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401203",
                              name: "American Nuts Party Pack 700ml",
                              category: "Kwality Wall's New Arrivals ",
                              description:
                                "Dive into a world full of nuts and raisins, Crunchy creamy and delicious! Kcal/Serving130",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/6b2a88cc-e882-4ae5-b9c9-e382dc091f3a_c6836f20-5b84-4e34-aa48-c90b3a7241c2.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 16000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "133926499",
                              name: "Feast Cadbury Crackle 70ml",
                              category: "Kwality Wall's New Arrivals ",
                              description:
                                "Experience the delight of Cadbury Crackle chocolate in a Kwality Walls Feast. Every bite has the deliciousness of Cadbury crackle Chocolate with signature hard chocolate. For any chocolate lover",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/7ba31cec-da68-4025-a3b3-29c32732ad2a_c89cbdc8-73f6-4e06-846c-f74136d5f679.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "26 ratings",
                                  ratingCountV2: "26",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121916243",
                              name: "Dry Fruit Delight Cup 100ml",
                              category: "Kwality Wall's New Arrivals ",
                              description:
                                "A Dry Fruit Lover's Dessert! Cashews , Almonds and  Raisins In Every Bite, a perfect dry fruit cup  Kcal/Serving126",
                              imageId: "d8287c213336579305ddcc7236e0c784",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Cornetto ",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120617553",
                              name: "Cornetto Double Chocolate 105ml",
                              category: "Cornetto ",
                              description:
                                "Duo of milk and dark chocolate topped with chocolate sauce, chocochips in a crunchy waffle cone. Kcal/Serving184",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/072ff94b-f6a6-4fa6-ae0c-9412502f685d_8c489616-d8f2-4981-9841-f9e13b1bc76f.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "59 ratings",
                                  ratingCountV2: "59",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401194",
                              name: "Cornetto Butterscotch, 105ml",
                              category: "Cornetto ",
                              description:
                                "Creamy butterscotch loaded with chunks of caramel cashew topping in a crunchy waffle cone. Kcal/Serving198",
                              imageId: "2f25b3897c950594eda32c440147c0c1",
                              inStock: 1,
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "42 ratings",
                                  ratingCountV2: "42",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401198",
                              name: "Cornetto Oreo, 110ml",
                              category: "Cornetto ",
                              description:
                                "Oreo cookie chunks in creamy vanilla, delicious chocolate disc and crunchy waffle cone.  An all time favourite for cone lovers! Kcal/Serving246",
                              imageId: "2d665bfdf73e8abb87bcc2252d3d8482",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401195",
                              name: "Cornetto Choco Brownie, 110ml",
                              category: "Cornetto ",
                              description:
                                "Disc as soft as a kiss!\nCrunchy waffle cone filled with creamy chocolate and brownie pieces with a soft chocolate disc and almond sprinkles on top. Kcal/Serving249",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/25/463a1dbc-eabf-4262-b352-05bfb6094058_54458971-fed1-415e-99e2-27a5115df43b.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401196",
                              name: "Cornetto Choco Vanilla ( Choco chips) , 105ml x 4",
                              category: "Cornetto ",
                              description:
                                "A duo of rich and creamy vanilla topped with chocolate sauce and Choco chips in a crunchy waffle cone. Kcal/Serving177",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/1f916795-822d-4a61-8567-bc64e88df5af_ad6fe04f-b151-45b3-817f-b3c372b88f0a.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 12000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401197",
                              name: "Cornetto Salted Caramel Brownie, 110ml",
                              category: "Cornetto ",
                              description:
                                "Sweet and Salty! Crunchy waffle cone loaded with salted caramel, brownies and topped with a soft chocolate disc. Kcal/Serving250",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/ccdc83a3-a34b-450c-8f2b-b11aa2a99c63_5ffd60cb-c8be-4c18-a63f-5ba249f440ff.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Magnum Ice Cream",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401183",
                              name: "Magnum Brownie Ice Cream, 80ml",
                              category: "Magnum Ice Cream",
                              description:
                                "Expertly crafted icecream with brownie flavour, crunchy cashew and Belgian chocolate. Kcal/Serving224",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/25/6054fa05-6a31-41f9-ad26-222fa63c1d54_4e2f3ee9-e0ea-46c7-9bc6-c8bfb5338cb4.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "23 ratings",
                                  ratingCountV2: "23",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401184",
                              name: "Magnum Almond Ice Cream, 80ml",
                              category: "Magnum Ice Cream",
                              description:
                                "Expertly crafted icecream with Madagascar vanilla, crunchy Australian almonds and Belgian chocolate. Kcal/Serving223",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/13219cfb-a3f1-422b-b5a4-1980e74cd9bb_87977043-247e-433f-ae4a-cd90ba7edb04.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "32 ratings",
                                  ratingCountV2: "32",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401187",
                              name: "Magnum Chocolate Truffle Ice Cream, 80ml",
                              category: "Magnum Ice Cream",
                              description:
                                "Rich chocolate icecream with truffle sauce wrapped in thick Belgian chocolate. Kcal/Serving182",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/25/9b33426f-690a-4b0a-9907-2e050407c862_41cf042b-4574-49aa-97f3-bfea6a0b4054.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "27 ratings",
                                  ratingCountV2: "27",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Family Tubs",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401192",
                              name: "Choco Brownie Fudge Tub, 700ml",
                              category: "Family Tubs",
                              description:
                                "Rich chocolate tub full of chunky brownie pieces and chocolate fudge. A tub that will make a dark chocolate lover Rock N Roll. Kcal/Serving150",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/88486220-c25e-4db2-8fdf-fc1a637c8009_eb8aabb5-9ef3-4838-a26c-dcf4bce38de1.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 31900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401174",
                              name: "Cadbury Crackle Tub, 700ml",
                              category: "Family Tubs",
                              description:
                                "A Cadbury lover's delight! Cadbury Crackle chocolate balls in creamy chocolate tub with swirls of rich chocolate sauce. A perfect partner for celebrations! Kcal/Serving155",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/24eadc4c-39d1-4e55-8e7b-b48529d22536_1f45bf87-731d-4992-9625-a29e35946379.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 37900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401193",
                              name: "Divine Chocolate Tub (Chocochips), 700ml",
                              category: "Family Tubs",
                              description:
                                "A real chocolate indulgence made with rich cocoa. Loaded with Choco chips & rich chocolate sauce in every creamy scoop. Kcal/Serving126",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/a4517aa4-281c-4210-a269-7aa791e88ff8_cdf54d6d-21a8-4564-8447-da80d3bc5ccf.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401177",
                              name: "Oreo & Cream, 700ml",
                              category: "Family Tubs",
                              description:
                                "The OG Oreo Tub!\nCrunchy Oreos chunks in rich creamy vanilla. Kcal/Serving126",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/5205c7cd-139e-4209-a3b3-82bb5aa5e39e_6ee4420d-e9cb-49b4-b550-4ae5d0b33bc0.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 29900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401176",
                              name: "Fruit & Nut (Dry fruit) Tub, 700ml",
                              category: "Family Tubs",
                              description:
                                "A dry fruit lover's paradise! Crunchy cashew nuts, almond and delicious raisins in every bite of creamy scoop. Kcal/Serving128",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/3dd2c272-22ea-4372-aad6-31bc500b534e_c8f6bd8d-f18b-4ee0-9fd2-769a86efb698.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401186",
                              name: "Butterscotch Tub, 700ml",
                              category: "Family Tubs",
                              description:
                                "Creamy butterscotch tub loaded with chunks of caramel coated cashew nuts. Kcal/Serving126",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/f781d918-f42e-4d88-819c-2d15aef8151e_b7571308-1d58-44e4-9740-acbec50849c7.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401189",
                              name: "Alphonso Mango Tub, 700ml",
                              category: "Family Tubs",
                              description:
                                "Enjoy the delight of real  alphonso mango in a delicious creamy tub.  A fruit lover's ultimate delight! Kcal/Serving94",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/1520ec6f-a546-438e-b362-40ccbbe29bca_2fdf4632-8857-45e2-ae46-655bfa35a696.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401180",
                              name: "Kesar Pista Tub, 500ml",
                              category: "Family Tubs",
                              description:
                                "Royal Delight In Every Bite! A Rich and Creamy Scoop with mesmerizing aroma of Kesar and richness of Pistachios. Kcal/Serving165",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/b8137634-8fff-44ea-b151-5411d03265e1_25891b39-b788-4631-92e3-cf419c1b1f60.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401191",
                              name: "Vanilla Tub, 700ml",
                              category: "Family Tubs",
                              description:
                                "Rich creamy vanilla dessert thats more vanilla-tasting than any vanilla you have ever tasted in all of vanillas entirety. Kcal/Serving112",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/49d104c5-df18-42b0-a0e5-e70bf359ee09_13fe7a1c-a51e-4f4c-8077-bb848c27b576.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: " Party Packs",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401168",
                              name: "Kesar Pista Party Pack [700ml X 2]",
                              category: " Party Packs",
                              description:
                                "Royal delight in every bite!\nA rich and creamy scoop loaded with rich flavourful kesar and pieces of pista.  Kcal/Serving117",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/a0646f8f-903c-45a0-952a-2ada36b57cab_45773924-97bb-4251-8a0c-579d9e6cfdb0.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 37000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121916240",
                              name: "Vanilla Party Pack [700ml x 2pcs]",
                              category: " Party Packs",
                              description:
                                "Rich creamy vanilla dessert thats more vanilla-tasting than any vanilla you have ever tasted in all of vanillas entirety. Kcal/Serving224",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/d63b712e-309d-49d9-ad77-7c9161b6755a_2311cb5e-24e1-4903-9e0a-0be84fb0c1b1.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 19800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "33 ratings",
                                  ratingCountV2: "33",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121916234",
                              name: "Oreo Party Pack [700ml x 2pcs]",
                              category: " Party Packs",
                              description:
                                "The Original Oreo Party Pack!\nCrunchy Oreo cookie chunks in rich creamy vanilla.  Kcal/Serving252",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/9d759bb9-56e1-45d2-8328-7d747cf8dfd8_8a8a044d-7a07-4971-b1df-0b5084e5cea9.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 39800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121916236",
                              name: "Butterscotch Party Pack [700ml x 2pcs]",
                              category: " Party Packs",
                              description:
                                "Creamy butterscotch Party Pack loaded with chunks of caramel coated cashew nuts. Kcal/Serving252",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/a7769bda-4c5a-4090-84dc-f672ad647fc9_3a4b53bc-b36f-463c-a3c8-463e224b238b.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.1",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121916239",
                              name: "Mango Party Pack [700ml x 2pcs]",
                              category: " Party Packs",
                              description:
                                "Enjoy the delight of real  alphonso mango in a delicious creamy Party Pack.  A fruit lover's ultimate delight! Kcal/Serving188",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/105c6d00-ac19-47a4-8737-a7a411777893_78cb2395-475b-4340-9ace-de4b7a37ca6d.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401163",
                              name: "Chocolate Party Pack 700ml",
                              category: " Party Packs",
                              description:
                                "Finest chocolate scoop made with rich cocoa. So rich & chocolatey that will make you go Choco Doodle Do. Kcal/Serving114",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/28a591d4-b4bb-4105-94aa-b82b2345559d_721ebbb7-4fa2-4af5-b7ab-ac12e711e855.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401167",
                              name: "Blackcurrant & Raisins Party Pack, 700ml",
                              category: " Party Packs",
                              description:
                                "Creamy  blend of black currant berries and raisins. A refreshing summer treat! Kcal/Serving114",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/39ab2e93-b0aa-45ba-831d-a3bca81470fc_aaca35b9-15a7-43ca-9358-af93cbb7af9a.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 18500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401172",
                              name: "Creamy Kulfi Party Pack, 700ml",
                              category: " Party Packs",
                              description:
                                "Rich & creamy desi kulfi icecream loaded with almonds and a twist of rose sauce. A perfect companion for hosting! Kcal/Serving133",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/82fbd1eb-f450-40d9-9455-c213a57c8b54_64a43d1c-d96d-4452-9c3b-0b5949ece5b8.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 18500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401170",
                              name: "Tutti Frutti Party Pack, 700ml",
                              category: " Party Packs",
                              description:
                                "Rich creamy scoop loaded with tiny bites of tutti fruity. Kcal/Serving96",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/c429247a-6264-44a7-9e2c-9a253daa0952_085cfa22-bb60-4c59-b845-52b9e128fa4e.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 15500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401165",
                              name: "Blushing Strawberry Party Pack 700ml",
                              category: " Party Packs",
                              description:
                                "A fruit lover's delight.\nA scoop that tastes like fresh strawberries.  Kcal/Serving112",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/b2bec1ce-0775-47c6-82cc-d3c3a87eeade_e8af665d-daa5-4398-82a6-6410786af9e9.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 12500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Single Serve Cups",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401153",
                              name: "Kulfi Cup Ice Cream,  100ml",
                              category: "Single Serve Cups",
                              description:
                                "Your favourite Desi Matka Kulfi in a cup!\nRich creamy kulfi with almonds - a desi delight for an  icecream lover. Kcal/Serving139",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/1573f058-e619-47e4-8f6a-36082e061f98_a05a4bb8-d574-4712-b338-8a450435543a.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "140401160",
                              name: "Trixy blueberry Cheesecake, (Sundae) 110ml",
                              category: "Single Serve Cups",
                              description:
                                "Parlour like fun in a cup!\n3 delicious layers - blueberry sauce, creamy cheesecake dessert  and crunchy cinnamon cookies. Kcal/Serving340",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/d8479fc8-3daf-4fd6-92b9-5bde022133df_40f7c852-ee32-4319-a1f1-d4adbd95f781.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "13 ratings",
                                  ratingCountV2: "13",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120617529",
                              name: "Trixy Cookie Sundae 110ml",
                              category: "Single Serve Cups",
                              description:
                                "(110ml) Parlour like fun in a cup. \n3 delicious layers - silky chocolate disc, delicious cookies & cream and crunchy choco cookies. Kcal/Serving235",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/ab4fa7f8-92de-45f5-896f-fdbe08e6aa7c_f464e122-da96-4bd9-a41c-4b17599431fe.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Duo Packs",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121916231",
                              name: "Aamras [60ml x 2pcs]",
                              category: "Duo Packs",
                              description:
                                "Aamras All Year Round!\nDelicious mango stick made with pulp of real alphonso mangoes. Kcal/Serving195",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/4aacf1d3-6d7b-40fd-a579-295a6c28e706_2484a6d7-6de1-48f0-ab42-e19bba706181.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "17 ratings",
                                  ratingCountV2: "17",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121916228",
                              name: "Cassatta [125ml x 2pcs]",
                              category: "Duo Packs",
                              description:
                                "Creamy rainbow trio between crunchy cashew nuts, tutti frutti and soft cake. Kcal/Serving157",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/b05f74fd-a1be-4778-af3b-acc70c896a2e_154b39df-4d28-4432-97e2-a3a1432ffa78.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "30 ratings",
                                  ratingCountV2: "30",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121916229",
                              name: "Black Forest Feast  - [70ml x 3pcs]",
                              category: "Duo Packs",
                              description:
                                "Black Forest cake meets Feast!\nCake pieces through layers of Feast with a solid chocolate surprise at the end. Kcal/Serving249",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/febd3709-6475-41c5-8520-f8c758d00517_316dc043-8cc4-4739-8e0b-e352c478f69c.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 13500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "19 ratings",
                                  ratingCountV2: "19",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121916233",
                              name: "Sandwich Chocolate and Vanilla [90ml x 2pcs]",
                              category: "Duo Packs",
                              description:
                                "Looking for a sweet snack? A hearty delicious sandwich filled creamy vanilla and yummy chocolate between two crunchy biscuits. Kcal/Serving168",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/23/6f77999c-7196-4ddf-9548-d864c77c5355_79075a28-decc-409e-bcce-0a7d99970c28.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "14 ratings",
                                  ratingCountV2: "14",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 20823005000613"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "Kwality Walls Ice Cream and More",
                      area: "Huda City",
                      completeAddress:
                        "RITIK TRADERS: H NO- 449,VILLAGE-KANAHI (73),NEAR WINE SHOP ,OPP- SEC-44,GURUGRAM, Kanahi(73), Gurgaon, Gurugram, Haryana - 122003(HUL-I320415P1255)",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "1aa7b3b6-ac61-4cc4-b157-c2f720e2b982",
  sid: "fsz76d44-c4b7-46e1-b105-2d87b846e2b2",
  deviceId: "02990a6e-23b4-648b-34d5-7adb9b0894e4",
  csrfToken: "86os0lwW9K2X-fXHlO6pPlZjWme8ZkEH2lzOGkp0",
};

export const RESTAURANT_DATA = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    pageOffset: {
      nextOffset: "CJhlELQ4KICgzYrsnIf6NzCnEw==",
      widgetOffset: {
        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_PB_Theme: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
        inlineFacetFilter: "",
        restaurantCountWidget: "",
      },
    },
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              title: "What's on your mind?",
              headerStyling: {
                padding: {
                  left: 16,
                  top: 16,
                  bottom: 4,
                },
              },
            },
            layout: {
              rows: 1,
              columns: 10,
              horizontalScrollEnabled: true,
              itemSpacing: 24,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 8,
                  top: 8,
                  right: 12,
                  bottom: 4,
                },
              },
              scrollBar: {},
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#FFFFFF",
                  theme: "THEME_TYPE_LIGHT",
                },
                darkMode: {
                  theme: "THEME_TYPE_DARK",
                },
              },
            },
            imageGridCards: {
              info: [
                {
                  id: "750591",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                    text: "Biryani",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for biryani",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Biryani",
                },
                {
                  id: "750201",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                    text: "Paratha",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for paratha",
                    altTextCta: "open",
                  },
                  entityId: "80475",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Paratha",
                },
                {
                  id: "749868",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                    text: "Cakes",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for cake",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Cakes",
                },
                {
                  id: "750216",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
                    text: "Pav Bhaji",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for pav bhaji",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Pav Bhaji",
                },
                {
                  id: "750228",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_samosa.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80396?collection_id=80396&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                    text: "Samosa",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for samosa",
                    altTextCta: "open",
                  },
                  entityId: "80396",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Samosa",
                },
                {
                  id: "750571",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
                    text: "Pure Veg",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for veg",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Pure Veg",
                },
                {
                  id: "750225",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                    text: "Salad",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for salad",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Salad",
                },
                {
                  id: "745861",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
                    text: "Shake",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for shakes",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83673&tags=layout_CCS_Shakes",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Shake",
                },
                {
                  id: "749876",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
                    text: "Chole Bhature",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for chhole bhatoore",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Chole Bhature",
                },
                {
                  id: "749760",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                    text: "Khichdi",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for khichdi",
                    altTextCta: "open",
                  },
                  entityId: "80455",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Khichdi",
                },
                {
                  id: "750229",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poha.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80373?collection_id=80373&tags=layout_CCS_Poha&type=rcv2",
                    text: "Poha",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for poha",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80373&tags=layout_CCS_Poha",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Poha",
                },
                {
                  id: "750197",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pancakes.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80471?collection_id=80471&tags=layout_BAU_Contextual%2Cpancake&type=rcv2",
                    text: "Pancakes",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for pancake",
                    altTextCta: "open",
                  },
                  entityId: "80471",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Pancakes",
                },
                {
                  id: "750598",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83907?collection_id=83907&tags=layout_CCS_Coffee&type=rcv2",
                    text: "Coffee",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for coffee",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83907&tags=layout_CCS_Coffee",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Coffee",
                },
                {
                  id: "750234",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80377?collection_id=80377&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                    text: "Poori",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for poori",
                    altTextCta: "open",
                  },
                  entityId: "80377",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Poori",
                },
                {
                  id: "750639",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kachori.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80448?collection_id=80448&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
                    text: "Kachori",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for kachori",
                    altTextCta: "open",
                  },
                  entityId: "80448",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Kachori",
                },
                {
                  id: "749786",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Omelette.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80467?collection_id=80467&tags=layout_BAU_Contextual%2Comelette&type=rcv2",
                    text: "Omelette",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for omelette",
                    altTextCta: "open",
                  },
                  entityId: "80467",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Omelette",
                },
                {
                  id: "749762",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80458?collection_id=80458&tags=layout_BAU_Contextual%2Classi&type=rcv2",
                    text: "Lassi",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for lassi",
                    altTextCta: "open",
                  },
                  entityId: "80458",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Lassi",
                },
                {
                  id: "750604",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80493?collection_id=80493&tags=layout_CCS_Tea&type=rcv2",
                    text: "Tea",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for tea",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80493&tags=layout_CCS_Tea",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Tea",
                },
                {
                  id: "750637",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Orange juice.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80445?collection_id=80445&tags=layout_Juices_Contextual&type=rcv2",
                    text: "Juice",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for juice",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80445&tags=layout_Juices_Contextual",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Juice",
                },
                {
                  id: "750543",
                  imageId:
                    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_upma.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80411?collection_id=80411&tags=layout_BAU_Contextual%2Cupma&type=rcv2",
                    text: "Upma",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for upma",
                    altTextCta: "open",
                  },
                  entityId: "80411",
                  frequencyCapping: {},
                  externalMarketing: {},
                  description: "Upma",
                },
              ],
              style: {
                width: {
                  type: "TYPE_RELATIVE",
                  value: 0.2941,
                  reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                },
                height: {
                  type: "TYPE_RELATIVE",
                  value: 1.2444,
                  reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                },
              },
            },
            id: "whats_on_your_mind",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                info: [
                  {
                    id: "750591",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                      text: "Biryani",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for biryani",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Biryani",
                  },
                  {
                    id: "750201",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                      text: "Paratha",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for paratha",
                      altTextCta: "open",
                    },
                    entityId: "80475",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Paratha",
                  },
                  {
                    id: "749868",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                      text: "Cakes",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for cake",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Cakes",
                  },
                  {
                    id: "750216",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
                      text: "Pav Bhaji",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for pav bhaji",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Pav Bhaji",
                  },
                  {
                    id: "750228",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_samosa.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80396?collection_id=80396&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                      text: "Samosa",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for samosa",
                      altTextCta: "open",
                    },
                    entityId: "80396",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Samosa",
                  },
                  {
                    id: "750571",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
                      text: "Pure Veg",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for veg",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Pure Veg",
                  },
                  {
                    id: "750225",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                      text: "Salad",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for salad",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Salad",
                  },
                  {
                    id: "745861",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
                      text: "Shake",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for shakes",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83673&tags=layout_CCS_Shakes",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Shake",
                  },
                  {
                    id: "749876",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
                      text: "Chole Bhature",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for chhole bhatoore",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Chole Bhature",
                  },
                  {
                    id: "749760",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                      text: "Khichdi",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for khichdi",
                      altTextCta: "open",
                    },
                    entityId: "80455",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Khichdi",
                  },
                  {
                    id: "750229",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poha.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80373?collection_id=80373&tags=layout_CCS_Poha&type=rcv2",
                      text: "Poha",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for poha",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80373&tags=layout_CCS_Poha",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Poha",
                  },
                  {
                    id: "750197",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pancakes.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80471?collection_id=80471&tags=layout_BAU_Contextual%2Cpancake&type=rcv2",
                      text: "Pancakes",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for pancake",
                      altTextCta: "open",
                    },
                    entityId: "80471",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Pancakes",
                  },
                  {
                    id: "750598",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83907?collection_id=83907&tags=layout_CCS_Coffee&type=rcv2",
                      text: "Coffee",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for coffee",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83907&tags=layout_CCS_Coffee",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Coffee",
                  },
                  {
                    id: "750234",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80377?collection_id=80377&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                      text: "Poori",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for poori",
                      altTextCta: "open",
                    },
                    entityId: "80377",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Poori",
                  },
                  {
                    id: "750639",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kachori.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80448?collection_id=80448&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
                      text: "Kachori",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for kachori",
                      altTextCta: "open",
                    },
                    entityId: "80448",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Kachori",
                  },
                  {
                    id: "749786",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Omelette.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80467?collection_id=80467&tags=layout_BAU_Contextual%2Comelette&type=rcv2",
                      text: "Omelette",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for omelette",
                      altTextCta: "open",
                    },
                    entityId: "80467",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Omelette",
                  },
                  {
                    id: "749762",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80458?collection_id=80458&tags=layout_BAU_Contextual%2Classi&type=rcv2",
                      text: "Lassi",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for lassi",
                      altTextCta: "open",
                    },
                    entityId: "80458",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Lassi",
                  },
                  {
                    id: "750604",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80493?collection_id=80493&tags=layout_CCS_Tea&type=rcv2",
                      text: "Tea",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for tea",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80493&tags=layout_CCS_Tea",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Tea",
                  },
                  {
                    id: "750637",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Orange juice.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80445?collection_id=80445&tags=layout_Juices_Contextual&type=rcv2",
                      text: "Juice",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for juice",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80445&tags=layout_Juices_Contextual",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Juice",
                  },
                  {
                    id: "750543",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_upma.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80411?collection_id=80411&tags=layout_BAU_Contextual%2Cupma&type=rcv2",
                      text: "Upma",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for upma",
                      altTextCta: "open",
                    },
                    entityId: "80411",
                    frequencyCapping: {},
                    externalMarketing: {},
                    description: "Upma",
                  },
                ],
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.2941,
                    reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 1.2444,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                },
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              title: "Top restaurant chains in Gurgaon",
              action: {},
              headerStyling: {
                padding: {
                  left: 16,
                  top: 28,
                  bottom: 18,
                },
              },
            },
            layout: {
              rows: 1,
              columns: 20,
              horizontalScrollEnabled: true,
              itemSpacing: 32,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 16,
                  right: 12,
                  bottom: 12,
                },
              },
              scrollBar: {
                scrollThumbColor: "#E46D47",
                scrollTrackColor: "#02060C",
                width: 54,
                height: 4,
                scrollStyling: {
                  padding: {
                    top: 6,
                    bottom: 24,
                  },
                },
              },
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
                darkMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
              },
            },
            id: "top_brands_for_you",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "332226",
                      name: "Tossin Pizza",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/d7333718-7fca-4f73-ae87-29d162b92955_332226.jpg",
                      locality: "Sector 50",
                      areaName: "Sector 50",
                      costForTwo: "₹600 for two",
                      cuisines: ["Pizzas", "Italian", "Beverages", "Desserts"],
                      avgRating: 4.5,
                      parentId: "1778",
                      avgRatingString: "4.5",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 30,
                        lastMileTravel: 2.6,
                        serviceability: "SERVICEABLE",
                        slaString: "25-35 mins",
                        lastMileTravelString: "2.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-28 06:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Pizza.png",
                            description: "Delivery!",
                          },
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.2",
                          ratingCount: "100+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/tossin-pizza-sector-50-gurgaon-332226",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "706614",
                      name: "La Pino'z Pizza",
                      cloudinaryImageId: "c99aa4e68f6f6235e8aeb420932c13d7",
                      locality: "Sec 50",
                      areaName: "Baani Square",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Pizzas",
                        "Pastas",
                        "Beverages",
                        "Fast Food",
                        "Italian",
                        "Desserts",
                      ],
                      avgRating: 4.2,
                      parentId: "4961",
                      avgRatingString: "4.2",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 49,
                        lastMileTravel: 2.6,
                        serviceability: "SERVICEABLE",
                        slaString: "45-50 mins",
                        lastMileTravelString: "2.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-28 06:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹90",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-sec-50-baani-square-gurgaon-706614",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "51124",
                      name: "Choko la",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/29/7a7013dc-cd27-46cf-a7a9-0e17adc19081_51124.jpg",
                      locality: "DLF Phase - 4",
                      areaName: "DLF Phase - 4",
                      costForTwo: "₹300 for two",
                      cuisines: ["Bakery", "Desserts"],
                      avgRating: 4.5,
                      parentId: "2098",
                      avgRatingString: "4.5",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 29,
                        lastMileTravel: 4.5,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "4.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-09-04 00:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.7",
                          ratingCount: "100+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/choko-la-dlf-phase-4-gurgaon-51124",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "6488",
                      name: "Chaayos Chai+Snacks=Relax",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_6488.JPG",
                      locality: "Sector 50",
                      areaName: "Sector 50",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets",
                      ],
                      avgRating: 4.6,
                      parentId: "281782",
                      avgRatingString: "4.6",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 42,
                        lastMileTravel: 3.6,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "3.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-09-04 00:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            description: "Delivery!",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId:
                                    "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹90",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "3.8",
                          ratingCount: "1K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-sector-50-gurgaon-6488",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "411518",
                      name: "McDonald's",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/47e32c1d-e3da-4612-acb3-45952ec26c4c_411518.JPG",
                      locality: "Sector 48",
                      areaName: "Sohna Road",
                      costForTwo: "₹400 for two",
                      cuisines: ["American"],
                      avgRating: 4.5,
                      parentId: "630",
                      avgRatingString: "4.5",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 49,
                        lastMileTravel: 4.7,
                        serviceability: "SERVICEABLE",
                        slaString: "45-50 mins",
                        lastMileTravelString: "4.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-29 04:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Burger.png",
                            description: "Delivery!",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Burger.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/mcdonalds-sector-48-sohna-road-gurgaon-411518",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "6244",
                      name: "Burger Singh (Big Punjabi Burgers)",
                      cloudinaryImageId: "972a37599772cdc7df93a0855ad87591",
                      locality: "Sushant Lok",
                      areaName: "Sushant Lok",
                      costForTwo: "₹300 for two",
                      cuisines: [
                        "Snacks",
                        "Fast Food",
                        "Indian",
                        "American",
                        "Beverages",
                        "Desserts",
                        "Mughlai",
                        "North Indian",
                        "Biryani",
                        "Tibetan",
                        "Chinese",
                        "Continental",
                      ],
                      avgRating: 4.4,
                      parentId: "375065",
                      avgRatingString: "4.4",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 37,
                        lastMileTravel: 3.8,
                        serviceability: "SERVICEABLE",
                        slaString: "35-40 mins",
                        lastMileTravelString: "3.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-28 07:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.0",
                          ratingCount: "100+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-sushant-lok-gurgaon-6244",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "12927",
                      name: "Subway",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/b9c7807f-59bb-4e91-83d4-5048d293f44e_12927.JPG",
                      locality: "Central Plaza Mall",
                      areaName: "Golf Course Road",
                      costForTwo: "₹350 for two",
                      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
                      avgRating: 4.5,
                      parentId: "2",
                      avgRatingString: "4.5",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 44,
                        lastMileTravel: 3.8,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "3.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-28 23:59:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/subway-central-plaza-mall-golf-course-road-gurgaon-12927",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "16209",
                      name: "Burger King",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/92d9a906-e61a-45d9-a465-eeeb8dfc38a9_16209.jpg",
                      locality: "Sector 29",
                      areaName: "Sector 29",
                      costForTwo: "₹350 for two",
                      cuisines: ["Burgers", "American"],
                      avgRating: 4.4,
                      parentId: "166",
                      avgRatingString: "4.4",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 45,
                        lastMileTravel: 2.6,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "2.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-28 06:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Burger.png",
                            description: "Delivery!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Burger.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹99",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.5",
                          ratingCount: "1K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/burger-king-sector-29-gurgaon-16209",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "481814",
                      name: "Peppy Parathas & Rolls By Chai Point",
                      cloudinaryImageId: "kg4ivil26hwlbgr7cwk2",
                      locality: "SS Plaza mall",
                      areaName: "Sector 47",
                      costForTwo: "₹150 for two",
                      cuisines: [
                        "Bakery",
                        "Beverages",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "South Indian",
                        "Punjabi",
                        "Chaat",
                        "Indian",
                        "American",
                        "Fast Food",
                        "Desserts",
                        "Cafe",
                        "Healthy Food",
                        "Home Food",
                        "North Indian",
                      ],
                      avgRating: 2.7,
                      parentId: "289265",
                      avgRatingString: "2.7",
                      totalRatingsString: "20+",
                      sla: {
                        deliveryTime: 48,
                        lastMileTravel: 2.6,
                        serviceability: "SERVICEABLE",
                        slaString: "45-50 mins",
                        lastMileTravelString: "2.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-09-04 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹90",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/peppy-parathas-and-rolls-by-chai-point-ss-plaza-mall-sector-47-gurgaon-481814",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "21356",
                      name: "Barista Coffee",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/29/be3b5a3c-f0dd-4966-94a0-e7fbe600564f_21356.jpg",
                      locality: "DLF Phase - 4",
                      areaName: "DLF Phase - 4",
                      costForTwo: "₹350 for two",
                      cuisines: ["Beverages", "Snacks", "Desserts"],
                      avgRating: 4.3,
                      parentId: "416281",
                      avgRatingString: "4.3",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 39,
                        lastMileTravel: 4.5,
                        serviceability: "SERVICEABLE",
                        slaString: "35-40 mins",
                        lastMileTravelString: "4.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-09-04 00:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹90",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.2",
                          ratingCount: "100+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/barista-coffee-dlf-phase-4-gurgaon-21356",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "521239",
                      name: "Suchali's Artisan Bakehouse",
                      cloudinaryImageId: "e4aa81ae2b8e54631092b10ca0d25c61",
                      locality: "Sector 53",
                      areaName: "Golf Course Road",
                      costForTwo: "₹600 for two",
                      cuisines: ["Bakery", "Desserts", "Beverages"],
                      avgRating: 4.6,
                      parentId: "196351",
                      avgRatingString: "4.6",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 45,
                        lastMileTravel: 6,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "6.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-28 23:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹75 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.6",
                          ratingCount: "10+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/suchalis-artisan-bakehouse-sector-53-golf-course-road-gurgaon-521239",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "32955",
                      name: "Blue Tokai Coffee Roasters",
                      cloudinaryImageId: "1a0521375f07155eda2f1ed263206831",
                      locality: "MG Road",
                      areaName: "Sikandarpur",
                      costForTwo: "₹600 for two",
                      cuisines: ["Cafe", "Coffee", "Beverages"],
                      avgRating: 4.5,
                      parentId: "2682",
                      avgRatingString: "4.5",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 40,
                        lastMileTravel: 7.1,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "7.1 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-28 06:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹75 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/blue-tokai-coffee-roasters-mg-road-sikandarpur-gurgaon-32955",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "799267",
                      name: "Seoul Mate Korean Burgers",
                      cloudinaryImageId: "d7fa61fb8704cb18a56d3d41c1ff853a",
                      locality: "Sohna Road",
                      areaName: "Rosewood  city",
                      costForTwo: "₹200 for two",
                      cuisines: ["Korean", "Burgers", "Beverages", "Fast Food"],
                      avgRating: 4.2,
                      parentId: "372969",
                      avgRatingString: "4.2",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 57,
                        lastMileTravel: 4.3,
                        serviceability: "SERVICEABLE",
                        slaString: "55-60 mins",
                        lastMileTravelString: "4.3 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-09-04 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/seoul-mate-korean-burgers-sohna-road-rosewood-city-gurgaon-799267",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "799268",
                      name: "Boba Bhai",
                      cloudinaryImageId: "77f9397a3e4c688a465eb6309114a1d1",
                      locality: "Sohna Road",
                      areaName: "Rosewood  city",
                      costForTwo: "₹200 for two",
                      cuisines: ["Beverages", "Burgers", "Korean", "Fast Food"],
                      avgRating: 4.1,
                      parentId: "361235",
                      avgRatingString: "4.1",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 54,
                        lastMileTravel: 4.3,
                        serviceability: "SERVICEABLE",
                        slaString: "50-55 mins",
                        lastMileTravelString: "4.3 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-09-04 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/boba-bhai-sohna-road-rosewood-city-gurgaon-799268",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "511464",
                      name: "The Brooklyn Creamery - Healthy Ice Cream",
                      cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
                      locality: "Golf Course Road",
                      areaName: "Sector 53",
                      costForTwo: "₹200 for two",
                      cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
                      avgRating: 4.3,
                      veg: true,
                      parentId: "236673",
                      avgRatingString: "4.3",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 44,
                        lastMileTravel: 4.9,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "4.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-09-04 00:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹59",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-golf-course-road-sector-53-gurgaon-511464",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "726148",
                      name: "Go Zero Ice Creams & Desserts",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/23/abb8a1dc-ff69-4d04-b0a4-bf01b06b3156_726148.JPG",
                      locality: "SARASWATI KUNJ",
                      areaName: "Golf Course Road",
                      costForTwo: "₹150 for two",
                      cuisines: ["Ice Cream", "Desserts", "Healthy Food"],
                      avgRating: 4.6,
                      veg: true,
                      parentId: "343689",
                      avgRatingString: "4.6",
                      totalRatingsString: "50+",
                      sla: {
                        deliveryTime: 49,
                        lastMileTravel: 4.9,
                        serviceability: "SERVICEABLE",
                        slaString: "45-50 mins",
                        lastMileTravelString: "4.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-29 22:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹110",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/go-zero-ice-creams-and-desserts-saraswati-kunj-golf-course-road-gurgaon-726148",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "127262",
                      name: "Rollsking",
                      cloudinaryImageId: "uuip6ne3o56ivy4drmtc",
                      locality: "Jharsa Road",
                      areaName: "Sector 39",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Fast Food",
                        "Rolls & Wraps",
                        "North Indian",
                        "Snacks",
                      ],
                      avgRating: 4.3,
                      parentId: "4697",
                      avgRatingString: "4.3",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 44,
                        lastMileTravel: 3.6,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "3.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-28 06:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Rolls.png",
                            description: "Delivery!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Rolls.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/rollsking-jharsa-road-sector-39-gurgaon-127262",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "673789",
                      name: "Drizzle and Dust - Cakes, Brownie and Dessert",
                      cloudinaryImageId: "6bbfd437ea492a812102892f7e72c582",
                      locality: "Vatika Business Park",
                      areaName: "sohna road",
                      costForTwo: "₹300 for two",
                      cuisines: ["Cafe", "Cakes", "Bakery"],
                      avgRating: 4.3,
                      parentId: "284777",
                      avgRatingString: "4.3",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 51,
                        lastMileTravel: 7.2,
                        serviceability: "SERVICEABLE",
                        slaString: "50-55 mins",
                        lastMileTravelString: "7.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-09-04 00:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/drizzle-and-dust-cakes-brownie-and-dessert-vatika-business-park-sohna-road-gurgaon-673789",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "766",
                      name: "Biryani Blues",
                      cloudinaryImageId: "97377e54937c079fe269d744aa66274a",
                      locality: "DLF Phase - 4",
                      areaName: "DLF Phase - 4",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Biryani",
                        "Hyderabadi",
                        "Lucknowi",
                        "Kebabs",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.5,
                      parentId: "13813",
                      avgRatingString: "4.5",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 37,
                        lastMileTravel: 4,
                        serviceability: "SERVICEABLE",
                        slaString: "35-40 mins",
                        lastMileTravelString: "4.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-28 07:59:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Biryani.png",
                            description: "Delivery!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.1",
                          ratingCount: "1K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/biryani-blues-dlf-phase-4-gurgaon-766",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "523288",
                      name: "Enchante By Chai Point",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/16/cbbd74b1-3a88-42ec-a9e5-a799f29be0f5_523288.jpg",
                      locality: "SS Plaza mall",
                      areaName: "Sector 47",
                      costForTwo: "₹150 for two",
                      cuisines: [
                        "Bakery",
                        "Beverages",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "South Indian",
                        "Punjabi",
                        "Chaat",
                        "Indian",
                        "American",
                        "Fast Food",
                        "Desserts",
                        "Cafe",
                        "Healthy Food",
                        "Home Food",
                        "North Indian",
                      ],
                      avgRating: 2.5,
                      parentId: "312141",
                      avgRatingString: "2.5",
                      totalRatingsString: "10+",
                      sla: {
                        deliveryTime: 49,
                        lastMileTravel: 2.6,
                        serviceability: "SERVICEABLE",
                        slaString: "45-50 mins",
                        lastMileTravelString: "2.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-09-04 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹90",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/enchante-by-chai-point-ss-plaza-mall-sector-47-gurgaon-523288",
                      type: "WEBLINK",
                    },
                  },
                ],
                theme: "Restaurant_Group_WebView_SEO_PB_Theme",
                widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.41111112,
                    reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 0.7027027,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                  layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
                },
                collectionId: "84124",
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
            title: "Restaurants with online food delivery in Gurgaon",
            id: "popular_restaurants_title",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            sortConfigs: [
              {
                key: "relevance",
                title: "Relevance(Default)",
                selected: true,
                defaultSelection: true,
              },
              {
                key: "deliveryTimeAsc",
                title: "DeliveryTime",
              },
              {
                key: "modelBasedRatingDesc",
                title: "Rating",
              },
              {
                key: "costForTwoAsc",
                title: "Cost:LowtoHigh",
              },
              {
                key: "costForTwoDesc",
                title: "Cost:HightoLow",
              },
            ],
            restaurantCount: 1517,
            facetList: [
              {
                label: "Delivery Time",
                id: "deliveryTime",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Fast Delivery",
                    id: "deliveryTimefacetquery1",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filterby",
              },
              {
                label: "Cuisines",
                id: "catalog_cuisines",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Afghani",
                    id: "query_afghani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "American",
                    id: "query_american",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Andhra",
                    id: "query_andhra",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Arabian",
                    id: "query_arabian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Asian",
                    id: "query_asian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Assamese",
                    id: "query_assamese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Awadhi",
                    id: "query_awadhi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bakery",
                    id: "query_bakery",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Barbecue",
                    id: "query_barbecue",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bengali",
                    id: "query_bengali",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Beverages",
                    id: "query_beverages",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bhutanese",
                    id: "query_bhutanese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bihari",
                    id: "query_bihari",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Biryani",
                    id: "query_biryani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Burger",
                    id: "query_burger",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Burgers",
                    id: "query_burgers",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cafe",
                    id: "query_cafe",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cakes",
                    id: "query_cakes",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cakes & Pastries",
                    id: "query_cakes_&_pastries",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cakes and Pastries",
                    id: "query_cakes_and_pastries",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Chaat",
                    id: "query_chaat",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Chinese",
                    id: "query_chinese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Code only for 1st time user",
                    id: "query_code_only_for_1st_time_user",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Coffee",
                    id: "query_coffee",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Continental",
                    id: "query_continental",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Default",
                    id: "query_default",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Desserts",
                    id: "query_desserts",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "European",
                    id: "query_european",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Fast Food",
                    id: "query_fast_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Fastfood",
                    id: "query_fastfood",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Free Delivery ! Limited Stocks!",
                    id: "query_free_delivery_!_limited_stocks!",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Grill",
                    id: "query_grill",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Healthy Food",
                    id: "query_healthy_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Home Food",
                    id: "query_home_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Hyderabadi",
                    id: "query_hyderabadi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ice Cream",
                    id: "query_ice_cream",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ice Cream Cakes",
                    id: "query_ice_cream_cakes",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Indian",
                    id: "query_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Italian",
                    id: "query_italian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Italian-American",
                    id: "query_italian-american",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Jain",
                    id: "query_jain",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Japanese",
                    id: "query_japanese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Juices",
                    id: "query_juices",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Kebabs",
                    id: "query_kebabs",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Keto",
                    id: "query_keto",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Korean",
                    id: "query_korean",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Lebanese",
                    id: "query_lebanese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Lucknowi",
                    id: "query_lucknowi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Maharashtrian",
                    id: "query_maharashtrian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Meat",
                    id: "query_meat",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mediterranean",
                    id: "query_mediterranean",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mexican",
                    id: "query_mexican",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Middle Eastern",
                    id: "query_middle_eastern",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Momos",
                    id: "query_momos",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mughlai",
                    id: "query_mughlai",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Naga",
                    id: "query_naga",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Navratri Special",
                    id: "query_navratri_special",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Nepalese",
                    id: "query_nepalese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "North Eastern",
                    id: "query_north_eastern",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "North Indian",
                    id: "query_north_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Oriental",
                    id: "query_oriental",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Oriya",
                    id: "query_oriya",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Paan",
                    id: "query_paan",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pan-Asian",
                    id: "query_pan-asian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pastas",
                    id: "query_pastas",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pizzas",
                    id: "query_pizzas",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Popular Brand Store",
                    id: "query_popular_brand_store",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Punjabi",
                    id: "query_punjabi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Rajasthani",
                    id: "query_rajasthani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ramzan Special",
                    id: "query_ramzan_special",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Rolls",
                    id: "query_rolls",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Rolls & Wraps",
                    id: "query_rolls_&_wraps",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Salads",
                    id: "query_salads",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Seafood",
                    id: "query_seafood",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Snacks",
                    id: "query_snacks",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "South Indian",
                    id: "query_south_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Street Food",
                    id: "query_street_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Sushi",
                    id: "query_sushi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Sweets",
                    id: "query_sweets",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tandoor",
                    id: "query_tandoor",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Thai",
                    id: "query_thai",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Thalis",
                    id: "query_thalis",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tibetan",
                    id: "query_tibetan",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Vietnamese",
                    id: "query_vietnamese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Waffle",
                    id: "query_waffle",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "chinese",
                    id: "query_chinese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "rolls",
                    id: "query_rolls",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "sandwich",
                    id: "query_sandwich",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                canSearch: true,
                subLabel: "Filterbycuisine",
                openFilter: true,
              },
              {
                label: "Explore",
                id: "explore",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "New on Swiggy",
                    id: "newfacetquery1",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
              },
              {
                label: "Ratings",
                id: "rating",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Ratings 4.5+",
                    id: "ratingfacetquery3",
                    analytics: {},
                  },
                  {
                    label: "Ratings 4.0+",
                    id: "ratingfacetquery4",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ratings 3.5+",
                    id: "ratingfacetquery5",
                    analytics: {},
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filterby",
              },
              {
                label: "Veg/Non-Veg",
                id: "isVeg",
                selection: "SELECT_TYPE_SINGLESELECT",
                facetInfo: [
                  {
                    label: "Pure Veg",
                    id: "isVegfacetquery2",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Non Veg",
                    id: "isVegfacetquery3",
                    analytics: {},
                  },
                ],
                viewType: "VIEW_TYPE_FLATTENED",
                subLabel: "Filterby",
              },
              {
                label: "Offers",
                id: "restaurantOfferMultiTd",
                selection: "SELECT_TYPE_SINGLESELECT",
                facetInfo: [
                  {
                    label: "Offers",
                    id: "restaurantOfferMultiTdfacetquery3",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_FLATTENED",
                subLabel: "Restaurantswith",
              },
              {
                label: "Cost for two",
                id: "costForTwo",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Rs. 300-Rs. 600",
                    id: "costForTwofacetquery3",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Greater than Rs. 600",
                    id: "costForTwofacetquery4",
                    analytics: {},
                  },
                  {
                    label: "Less than Rs. 300",
                    id: "costForTwofacetquery5",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filterby",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              columns: 4,
            },
            id: "restaurant_grid_listing",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "124956",
                      name: "Ice Pice - Shakes & Sundaes",
                      cloudinaryImageId: "u7xvqe7lkl6lhlgwunff",
                      locality: "Netaji Subhash Marg",
                      areaName: "Sector 45",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Ice Cream",
                        "Desserts",
                        "Waffle",
                        "Fast Food",
                        "Snacks",
                        "Street Food",
                        "Beverages",
                      ],
                      avgRating: 4.2,
                      veg: true,
                      parentId: "105671",
                      avgRatingString: "4.2",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 33,
                        lastMileTravel: 0.9,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "0.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-09-04 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3eae6676-3fb3-4671-b45f-68d5bd5980b2",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/ice-pice-shakes-and-sundaes-netaji-subhash-marg-sector-45-gurgaon-124956",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "332226",
                      name: "Tossin Pizza",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/d7333718-7fca-4f73-ae87-29d162b92955_332226.jpg",
                      locality: "Sector 50",
                      areaName: "Sector 50",
                      costForTwo: "₹600 for two",
                      cuisines: ["Pizzas", "Italian", "Beverages", "Desserts"],
                      avgRating: 4.5,
                      parentId: "1778",
                      avgRatingString: "4.5",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 30,
                        lastMileTravel: 2.6,
                        serviceability: "SERVICEABLE",
                        slaString: "25-35 mins",
                        lastMileTravelString: "2.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-28 06:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Pizza.png",
                            description: "Delivery!",
                          },
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                                },
                              },
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.2",
                          ratingCount: "100+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3eae6676-3fb3-4671-b45f-68d5bd5980b2",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/tossin-pizza-sector-50-gurgaon-332226",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "837497",
                      name: "Roll Box",
                      cloudinaryImageId: "badbd312ae922756d3a1e54232bb23bd",
                      locality: "Sector 57",
                      areaName: "Huda City",
                      costForTwo: "₹200 for two",
                      cuisines: ["Rolls & Wraps", "Fast Food"],
                      avgRating: 4.4,
                      parentId: "170700",
                      avgRatingString: "4.4",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 35,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-28 06:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3eae6676-3fb3-4671-b45f-68d5bd5980b2",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/roll-box-sector-57-huda-city-gurgaon-837497",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "706614",
                      name: "La Pino'z Pizza",
                      cloudinaryImageId: "c99aa4e68f6f6235e8aeb420932c13d7",
                      locality: "Sec 50",
                      areaName: "Baani Square",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Pizzas",
                        "Pastas",
                        "Beverages",
                        "Fast Food",
                        "Italian",
                        "Desserts",
                      ],
                      avgRating: 4.2,
                      parentId: "4961",
                      avgRatingString: "4.2",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 49,
                        lastMileTravel: 2.6,
                        serviceability: "SERVICEABLE",
                        slaString: "45-50 mins",
                        lastMileTravelString: "2.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-28 06:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹90",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3eae6676-3fb3-4671-b45f-68d5bd5980b2",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-sec-50-baani-square-gurgaon-706614",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "51124",
                      name: "Choko la",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/29/7a7013dc-cd27-46cf-a7a9-0e17adc19081_51124.jpg",
                      locality: "DLF Phase - 4",
                      areaName: "DLF Phase - 4",
                      costForTwo: "₹300 for two",
                      cuisines: ["Bakery", "Desserts"],
                      avgRating: 4.5,
                      parentId: "2098",
                      avgRatingString: "4.5",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 29,
                        lastMileTravel: 4.5,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "4.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-09-04 00:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "4.7",
                          ratingCount: "100+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3eae6676-3fb3-4671-b45f-68d5bd5980b2",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/choko-la-dlf-phase-4-gurgaon-51124",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "256872",
                      name: "Rollsking",
                      cloudinaryImageId: "iaqqkovqoi8lwfwxmkeg",
                      locality: "Sushant Lok - I",
                      areaName: "Silokhra",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Fast Food",
                        "Rolls & Wraps",
                        "North Indian",
                        "Snacks",
                      ],
                      avgRating: 4.3,
                      parentId: "4697",
                      avgRatingString: "4.3",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 34,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-28 06:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Rolls.png",
                            description: "Delivery!",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId: "Rxawards/_CATEGORY-Rolls.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3eae6676-3fb3-4671-b45f-68d5bd5980b2",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/rollsking-sushant-lok-i-silokhra-gurgaon-256872",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "280771",
                      name: "Chamail Singh Da Dhaba",
                      cloudinaryImageId: "ge2lzhxpx7izcbpseria",
                      locality: "Jharsa",
                      areaName: "Sector 39",
                      costForTwo: "₹299 for two",
                      cuisines: ["North Indian"],
                      avgRating: 4.1,
                      parentId: "57541",
                      avgRatingString: "4.1",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 46,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "45-50 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-08-28 06:30:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "--",
                        },
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3eae6676-3fb3-4671-b45f-68d5bd5980b2",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/chamail-singh-da-dhaba-jharsa-sector-39-gurgaon-280771",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "6488",
                      name: "Chaayos Chai+Snacks=Relax",
                      cloudinaryImageId:
                        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_6488.JPG",
                      locality: "Sector 50",
                      areaName: "Sector 50",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets",
                      ],
                      avgRating: 4.6,
                      parentId: "281782",
                      avgRatingString: "4.6",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 42,
                        lastMileTravel: 3.6,
                        serviceability: "SERVICEABLE",
                        slaString: "40-45 mins",
                        lastMileTravelString: "3.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-09-04 00:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            description: "Delivery!",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Delivery!",
                                  imageId:
                                    "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹90",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                      externalRatings: {
                        aggregatedRating: {
                          rating: "3.8",
                          ratingCount: "1K+",
                        },
                        source: "GOOGLE",
                        sourceIconImageId:
                          "v1704440323/google_ratings/rating_google_tag",
                      },
                      ratingsDisplayPreference:
                        "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    },
                    analytics: {
                      context: "seo-data-3eae6676-3fb3-4671-b45f-68d5bd5980b2",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-sector-50-gurgaon-6488",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                ],
                theme: "SeoRestaurantListingGridWidget",
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
            message: "Show More",
            id: "show_more_button",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Best Places to Eat Across Cities",
            brands: [
              {
                text: "Best Restaurants in Bangalore",
                link: "https://www.swiggy.com/city/bangalore/best-restaurants",
              },
              {
                text: "Best Restaurants in Pune",
                link: "https://www.swiggy.com/city/pune/best-restaurants",
              },
              {
                text: "Best Restaurants in Mumbai",
                link: "https://www.swiggy.com/city/mumbai/best-restaurants",
              },
              {
                text: "Best Restaurants in Delhi",
                link: "https://www.swiggy.com/city/delhi/best-restaurants",
              },
              {
                text: "Best Restaurants in Hyderabad",
                link: "https://www.swiggy.com/city/hyderabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Kolkata",
                link: "https://www.swiggy.com/city/kolkata/best-restaurants",
              },
              {
                text: "Best Restaurants in Chennai",
                link: "https://www.swiggy.com/city/chennai/best-restaurants",
              },
              {
                text: "Best Restaurants in Chandigarh",
                link: "https://www.swiggy.com/city/chandigarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Ahmedabad",
                link: "https://www.swiggy.com/city/ahmedabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Jaipur",
                link: "https://www.swiggy.com/city/jaipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Nagpur",
                link: "https://www.swiggy.com/city/nagpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhubaneswar",
                link: "https://www.swiggy.com/city/bhubaneswar/best-restaurants",
              },
              {
                text: "Best Restaurants in Kochi",
                link: "https://www.swiggy.com/city/kochi/best-restaurants",
              },
              {
                text: "Best Restaurants in Surat",
                link: "https://www.swiggy.com/city/surat/best-restaurants",
              },
              {
                text: "Best Restaurants in Dehradun",
                link: "https://www.swiggy.com/city/dehradun/best-restaurants",
              },
              {
                text: "Best Restaurants in Ludhiana",
                link: "https://www.swiggy.com/city/ludhiana/best-restaurants",
              },
              {
                text: "Best Restaurants in Patna",
                link: "https://www.swiggy.com/city/patna/best-restaurants",
              },
              {
                text: "Best Restaurants in Mangaluru",
                link: "https://www.swiggy.com/city/mangaluru/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhopal",
                link: "https://www.swiggy.com/city/bhopal/best-restaurants",
              },
              {
                text: "Best Restaurants in Gurgaon",
                link: "https://www.swiggy.com/city/gurgaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Coimbatore",
                link: "https://www.swiggy.com/city/coimbatore/best-restaurants",
              },
              {
                text: "Best Restaurants in Agra",
                link: "https://www.swiggy.com/city/agra/best-restaurants",
              },
              {
                text: "Best Restaurants in Noida",
                link: "https://www.swiggy.com/city/noida/best-restaurants",
              },
              {
                text: "Best Restaurants in Vijayawada",
                link: "https://www.swiggy.com/city/vijayawada/best-restaurants",
              },
              {
                text: "Best Restaurants in Guwahati",
                link: "https://www.swiggy.com/city/guwahati/best-restaurants",
              },
              {
                text: "Best Restaurants in Mysore",
                link: "https://www.swiggy.com/city/mysore/best-restaurants",
              },
              {
                text: "Best Restaurants in Pondicherry",
                link: "https://www.swiggy.com/city/pondicherry/best-restaurants",
              },
              {
                text: "Best Restaurants in Thiruvananthapuram",
                link: "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants",
              },
              {
                text: "Best Restaurants in Ranchi",
                link: "https://www.swiggy.com/city/ranchi/best-restaurants",
              },
              {
                text: "Best Restaurants in Vizag",
                link: "https://www.swiggy.com/city/vizag/best-restaurants",
              },
              {
                text: "Best Restaurants in Udaipur",
                link: "https://www.swiggy.com/city/udaipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Vadodara",
                link: "https://www.swiggy.com/city/vadodara/best-restaurants",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Best Cuisines Near Me",
            brands: [
              {
                text: "Chinese Restaurant Near Me",
                link: "https://www.swiggy.com/chinese-restaurants-near-me",
              },
              {
                text: "South Indian Restaurant Near Me",
                link: "https://www.swiggy.com/south-indian-restaurants-near-me",
              },
              {
                text: "Indian Restaurant Near Me",
                link: "https://www.swiggy.com/indian-restaurants-near-me",
              },
              {
                text: "Kerala Restaurant Near Me",
                link: "https://www.swiggy.com/kerala-restaurants-near-me",
              },
              {
                text: "Korean Restaurant Near Me",
                link: "https://www.swiggy.com/korean-restaurants-near-me",
              },
              {
                text: "North Indian Restaurant Near Me",
                link: "https://www.swiggy.com/north-indian-restaurants-near-me",
              },
              {
                text: "Seafood Restaurant Near Me",
                link: "https://www.swiggy.com/seafood-restaurants-near-me",
              },
              {
                text: "Bengali Restaurant Near Me",
                link: "https://www.swiggy.com/bengali-restaurants-near-me",
              },
              {
                text: "Punjabi Restaurant Near Me",
                link: "https://www.swiggy.com/punjabi-restaurants-near-me",
              },
              {
                text: "Italian Restaurant Near Me",
                link: "https://www.swiggy.com/italian-restaurants-near-me",
              },
              {
                text: "Andhra Restaurant Near Me",
                link: "https://www.swiggy.com/andhra-restaurants-near-me",
              },
              {
                text: "Biryani Restaurant Near Me",
                link: "https://www.swiggy.com/biryani-restaurants-near-me",
              },
              {
                text: "Japanese Restaurant Near Me",
                link: "https://www.swiggy.com/japanese-restaurants-near-me",
              },
              {
                text: "Arabian Restaurant Near Me",
                link: "https://www.swiggy.com/arabian-restaurants-near-me",
              },
              {
                text: "Fast Food Restaurant Near Me",
                link: "https://www.swiggy.com/fast-food-restaurants-near-me",
              },
              {
                text: "Jain Restaurant Near Me",
                link: "https://www.swiggy.com/jain-restaurants-near-me",
              },
              {
                text: "Gujarati Restaurant Near Me",
                link: "https://www.swiggy.com/gujarati-restaurants-near-me",
              },
              {
                text: "Thai Restaurant Near Me",
                link: "https://www.swiggy.com/thai-restaurants-near-me",
              },
              {
                text: "Pizzas Restaurant Near Me",
                link: "https://www.swiggy.com/pizzas-restaurants-near-me",
              },
              {
                text: "Asian Restaurant Near Me",
                link: "https://www.swiggy.com/asian-restaurants-near-me",
              },
              {
                text: "Cafe Restaurant Near Me",
                link: "https://www.swiggy.com/cafe-restaurants-near-me",
              },
              {
                text: "Continental Restaurant Near Me",
                link: "https://www.swiggy.com/continental-restaurants-near-me",
              },
              {
                text: "Mexican Restaurant Near Me",
                link: "https://www.swiggy.com/mexican-restaurants-near-me",
              },
              {
                text: "Mughlai Restaurant Near Me",
                link: "https://www.swiggy.com/mughlai-restaurants-near-me",
              },
              {
                text: "Sushi Restaurant Near Me",
                link: "https://www.swiggy.com/sushi-restaurants-near-me",
              },
              {
                text: "Mangalorean Restaurant Near Me",
                link: "https://www.swiggy.com/mangalorean-restaurants-near-me",
              },
              {
                text: "Tibetan Restaurant Near Me",
                link: "https://www.swiggy.com/tibetan-restaurants-near-me",
              },
              {
                text: "Barbecue Restaurant Near Me",
                link: "https://www.swiggy.com/barbecue-restaurants-near-me",
              },
              {
                text: "Maharashtrian Restaurant Near Me",
                link: "https://www.swiggy.com/maharashtrian-restaurants-near-me",
              },
              {
                text: "Nepalese Restaurant Near Me",
                link: "https://www.swiggy.com/nepalese-restaurants-near-me",
              },
              {
                text: "Rajasthani Restaurant Near Me",
                link: "https://www.swiggy.com/rajasthani-restaurants-near-me",
              },
              {
                text: "Turkish Restaurant Near Me",
                link: "https://www.swiggy.com/turkish-restaurants-near-me",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Explore Every Restaurants Near Me",
            brands: [
              {
                text: "Explore Restaurants Near Me",
                link: "https://www.swiggy.com/restaurants-near-me",
              },
              {
                text: "Explore Top Rated Restaurants Near Me",
                link: "https://www.swiggy.com/best-restaurants-near-me",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
            title: "For better experience,download the Swiggy app now",
            androidAppImage: "portal/m/play_store.png",
            androidAppLink:
              "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
            iosAppImage: "portal/m/app_store.png",
            iosAppLink:
              "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
            id: "app_install_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
            cities: [
              {
                text: "Bangalore",
                link: "https://www.swiggy.com/city/bangalore",
              },
              {
                text: "Gurgaon",
                link: "https://www.swiggy.com/city/gurgaon",
              },
              {
                text: "Hyderabad",
                link: "https://www.swiggy.com/city/hyderabad",
              },
              {
                text: "Delhi",
                link: "https://www.swiggy.com/city/delhi",
              },
              {
                text: "Mumbai",
                link: "https://www.swiggy.com/city/mumbai",
              },
              {
                text: "Pune",
                link: "https://www.swiggy.com/city/pune",
              },
              {
                text: "Kolkata",
                link: "https://www.swiggy.com/city/kolkata",
              },
              {
                text: "Chennai",
                link: "https://www.swiggy.com/city/chennai",
              },
              {
                text: "Ahmedabad",
                link: "https://www.swiggy.com/city/ahmedabad",
              },
              {
                text: "Chandigarh",
                link: "https://www.swiggy.com/city/chandigarh",
              },
              {
                text: "Jaipur",
                link: "https://www.swiggy.com/city/jaipur",
              },
              {
                text: "Kochi",
                link: "https://www.swiggy.com/city/kochi",
              },
              {
                text: "Coimbatore",
                link: "https://www.swiggy.com/city/coimbatore",
              },
              {
                text: "Lucknow",
                link: "https://www.swiggy.com/city/lucknow",
              },
              {
                text: "Nagpur",
                link: "https://www.swiggy.com/city/nagpur",
              },
              {
                text: "Vadodara",
                link: "https://www.swiggy.com/city/vadodara",
              },
              {
                text: "Indore",
                link: "https://www.swiggy.com/city/indore",
              },
              {
                text: "Guwahati",
                link: "https://www.swiggy.com/city/guwahati",
              },
              {
                text: "Vizag",
                link: "https://www.swiggy.com/city/vizag",
              },
              {
                text: "Surat",
                link: "https://www.swiggy.com/city/surat",
              },
              {
                text: "Dehradun",
                link: "https://www.swiggy.com/city/dehradun",
              },
              {
                text: "Noida",
                link: "https://www.swiggy.com/city/noida",
              },
              {
                text: "Ludhiana",
                link: "https://www.swiggy.com/city/ludhiana",
              },
              {
                text: "Trichy",
                link: "https://www.swiggy.com/city/trichy",
              },
              {
                text: "Vijayawada",
                link: "https://www.swiggy.com/city/vijayawada",
              },
              {
                text: "Kanpur",
                link: "https://www.swiggy.com/city/kanpur",
              },
              {
                text: "Mysore",
                link: "https://www.swiggy.com/city/mysore",
              },
              {
                text: "Nashik",
                link: "https://www.swiggy.com/city/nashik",
              },
              {
                text: "Udaipur",
                link: "https://www.swiggy.com/city/udaipur",
              },
              {
                text: "Pondicherry",
                link: "https://www.swiggy.com/city/pondicherry",
              },
              {
                text: "Agra",
                link: "https://www.swiggy.com/city/agra",
              },
              {
                text: "Aurangabad",
                link: "https://www.swiggy.com/city/aurangabad",
              },
              {
                text: "Jalandhar",
                link: "https://www.swiggy.com/city/jalandhar",
              },
              {
                text: "Kota",
                link: "https://www.swiggy.com/city/kota",
              },
              {
                text: "Madurai",
                link: "https://www.swiggy.com/city/madurai",
              },
              {
                text: "Allahabad",
                link: "https://www.swiggy.com/city/allahabad",
              },
              {
                text: "Manipal",
                link: "https://www.swiggy.com/city/manipal",
              },
              {
                text: "Amritsar",
                link: "https://www.swiggy.com/city/amritsar",
              },
              {
                text: "Bareilly",
                link: "https://www.swiggy.com/city/bareilly",
              },
              {
                text: "Meerut",
                link: "https://www.swiggy.com/city/meerut",
              },
              {
                text: "Bhopal",
                link: "https://www.swiggy.com/city/bhopal",
              },
              {
                text: "Ooty",
                link: "https://www.swiggy.com/city/ooty",
              },
              {
                text: "Bhubaneswar",
                link: "https://www.swiggy.com/city/bhubaneswar",
              },
              {
                text: "Raipur",
                link: "https://www.swiggy.com/city/raipur",
              },
              {
                text: "Bikaner",
                link: "https://www.swiggy.com/city/bikaner",
              },
              {
                text: "Rajkot",
                link: "https://www.swiggy.com/city/rajkot",
              },
              {
                text: "Kozhikode",
                link: "https://www.swiggy.com/city/kozhikode",
              },
              {
                text: "Central Goa",
                link: "https://www.swiggy.com/city/central-goa",
              },
              {
                text: "Sirsa",
                link: "https://www.swiggy.com/city/sirsa",
              },
              {
                text: "Gwalior",
                link: "https://www.swiggy.com/city/gwalior",
              },
              {
                text: "Thrissur",
                link: "https://www.swiggy.com/city/thrissur",
              },
              {
                text: "Kharagpur",
                link: "https://www.swiggy.com/city/kharagpur",
              },
              {
                text: "Tirupati",
                link: "https://www.swiggy.com/city/tirupati",
              },
              {
                text: "Tirupur",
                link: "https://www.swiggy.com/city/tirupur",
              },
              {
                text: "Vellore",
                link: "https://www.swiggy.com/city/vellore",
              },
              {
                text: "Thiruvananthapuram",
                link: "https://www.swiggy.com/city/thiruvananthapuram",
              },
              {
                text: "Warangal",
                link: "https://www.swiggy.com/city/warangal",
              },
              {
                text: "Varanasi",
                link: "https://www.swiggy.com/city/varanasi",
              },
              {
                text: "Mangaluru",
                link: "https://www.swiggy.com/city/mangaluru",
              },
              {
                text: "Patna",
                link: "https://www.swiggy.com/city/patna",
              },
              {
                text: "Ranchi",
                link: "https://www.swiggy.com/city/ranchi",
              },
              {
                text: "Faridabad",
                link: "https://www.swiggy.com/city/faridabad",
              },
              {
                text: "Guntur",
                link: "https://www.swiggy.com/city/guntur",
              },
              {
                text: "Ujjain",
                link: "https://www.swiggy.com/city/ujjain",
              },
              {
                text: "Patiala",
                link: "https://www.swiggy.com/city/patiala",
              },
              {
                text: "Karnal",
                link: "https://www.swiggy.com/city/karnal",
              },
              {
                text: "Kakinada",
                link: "https://www.swiggy.com/city/kakinada",
              },
              {
                text: "Rajahmundry",
                link: "https://www.swiggy.com/city/rajahmundry",
              },
              {
                text: "Bilaspur",
                link: "https://www.swiggy.com/city/bilaspur",
              },
              {
                text: "Bhilai",
                link: "https://www.swiggy.com/city/bhilai",
              },
              {
                text: "Anand",
                link: "https://www.swiggy.com/city/anand",
              },
              {
                text: "Bhavnagar",
                link: "https://www.swiggy.com/city/bhavnagar",
              },
              {
                text: "Jammu",
                link: "https://www.swiggy.com/city/jammu",
              },
              {
                text: "Muktsar",
                link: "https://www.swiggy.com/city/muktsar",
              },
              {
                text: "Panipat",
                link: "https://www.swiggy.com/city/panipat",
              },
              {
                text: "Dhanbad",
                link: "https://www.swiggy.com/city/dhanbad",
              },
              {
                text: "Hubli",
                link: "https://www.swiggy.com/city/hubli",
              },
              {
                text: "Belgaum",
                link: "https://www.swiggy.com/city/belgaum",
              },
              {
                text: "Jabalpur",
                link: "https://www.swiggy.com/city/jabalpur",
              },
              {
                text: "Kolhapur",
                link: "https://www.swiggy.com/city/kolhapur",
              },
              {
                text: "Solapur",
                link: "https://www.swiggy.com/city/solapur",
              },
              {
                text: "Shillong",
                link: "https://www.swiggy.com/city/shillong",
              },
              {
                text: "Cuttack",
                link: "https://www.swiggy.com/city/cuttack",
              },
              {
                text: "Aligarh",
                link: "https://www.swiggy.com/city/aligarh",
              },
              {
                text: "Salem",
                link: "https://www.swiggy.com/city/salem",
              },
              {
                text: "Jodhpur",
                link: "https://www.swiggy.com/city/jodhpur",
              },
              {
                text: "Ajmer",
                link: "https://www.swiggy.com/city/ajmer",
              },
              {
                text: "Jhansi",
                link: "https://www.swiggy.com/city/jhansi",
              },
              {
                text: "Gorakhpur",
                link: "https://www.swiggy.com/city/gorakhpur",
              },
              {
                text: "Thanjavur",
                link: "https://www.swiggy.com/city/thanjavur",
              },
              {
                text: "Erode",
                link: "https://www.swiggy.com/city/erode",
              },
              {
                text: "Nellore",
                link: "https://www.swiggy.com/city/nellore",
              },
              {
                text: "Rourkela",
                link: "https://www.swiggy.com/city/rourkela",
              },
              {
                text: "Anantapur",
                link: "https://www.swiggy.com/city/anantapur",
              },
              {
                text: "Kurnool",
                link: "https://www.swiggy.com/city/kurnool",
              },
              {
                text: "Ahmednagar",
                link: "https://www.swiggy.com/city/ahmednagar",
              },
              {
                text: "Phagwara",
                link: "https://www.swiggy.com/city/phagwara",
              },
              {
                text: "Ambala",
                link: "https://www.swiggy.com/city/ambala",
              },
              {
                text: "Ballari",
                link: "https://www.swiggy.com/city/ballari",
              },
              {
                text: "Saharanpur",
                link: "https://www.swiggy.com/city/saharanpur",
              },
              {
                text: "Tirunelveli",
                link: "https://www.swiggy.com/city/tirunelveli",
              },
              {
                text: "Bathinda",
                link: "https://www.swiggy.com/city/bathinda",
              },
              {
                text: "Mathura",
                link: "https://www.swiggy.com/city/mathura",
              },
              {
                text: "Haridwar",
                link: "https://www.swiggy.com/city/haridwar",
              },
              {
                text: "Ratnagiri",
                link: "https://www.swiggy.com/city/ratnagiri",
              },
              {
                text: "Sangli",
                link: "https://www.swiggy.com/city/sangli",
              },
              {
                text: "Amravati",
                link: "https://www.swiggy.com/city/amravati",
              },
              {
                text: "Rishikesh",
                link: "https://www.swiggy.com/city/rishikesh",
              },
              {
                text: "Nagercoil",
                link: "https://www.swiggy.com/city/nagercoil",
              },
              {
                text: "KanyaKumari",
                link: "https://www.swiggy.com/city/kanyakumari",
              },
              {
                text: "Kadapa",
                link: "https://www.swiggy.com/city/kadapa",
              },
              {
                text: "Nizamabad",
                link: "https://www.swiggy.com/city/nizamabad",
              },
              {
                text: "Shivamogga",
                link: "https://www.swiggy.com/city/shivamogga",
              },
              {
                text: "Davanagere",
                link: "https://www.swiggy.com/city/davanagere",
              },
              {
                text: "Roorkee",
                link: "https://www.swiggy.com/city/roorkee",
              },
              {
                text: "Nanded",
                link: "https://www.swiggy.com/city/nanded",
              },
              {
                text: "Rewa",
                link: "https://www.swiggy.com/city/rewa",
              },
              {
                text: "Satna",
                link: "https://www.swiggy.com/city/satna",
              },
              {
                text: "Muzaffarpur",
                link: "https://www.swiggy.com/city/muzaffarpur",
              },
              {
                text: "Valsad",
                link: "https://www.swiggy.com/city/valsad",
              },
              {
                text: "Vapi",
                link: "https://www.swiggy.com/city/vapi",
              },
              {
                text: "Chhapra",
                link: "https://www.swiggy.com/city/chhapra",
              },
              {
                text: "Dharamshala",
                link: "https://www.swiggy.com/city/dharamshala",
              },
              {
                text: "Kollam",
                link: "https://www.swiggy.com/city/kollam",
              },
              {
                text: "Silchar",
                link: "https://www.swiggy.com/city/silchar",
              },
              {
                text: "Alappuzha",
                link: "https://www.swiggy.com/city/alappuzha",
              },
              {
                text: "Sonipat",
                link: "https://www.swiggy.com/city/sonipat",
              },
              {
                text: "Rohtak",
                link: "https://www.swiggy.com/city/rohtak",
              },
              {
                text: "Mehsana",
                link: "https://www.swiggy.com/city/mehsana",
              },
              {
                text: "Kullu",
                link: "https://www.swiggy.com/city/kullu",
              },
              {
                text: "Dhule",
                link: "https://www.swiggy.com/city/dhule",
              },
              {
                text: "Dharwad",
                link: "https://www.swiggy.com/city/dharwad",
              },
              {
                text: "Latur",
                link: "https://www.swiggy.com/city/latur",
              },
              {
                text: "Vizianagaram",
                link: "https://www.swiggy.com/city/vizianagaram",
              },
              {
                text: "Khammam",
                link: "https://www.swiggy.com/city/khammam",
              },
              {
                text: "Hampi",
                link: "https://www.swiggy.com/city/hampi",
              },
              {
                text: "Nainital",
                link: "https://www.swiggy.com/city/nainital",
              },
              {
                text: "Akola",
                link: "https://www.swiggy.com/city/akola",
              },
              {
                text: "Kalaburagi",
                link: "https://www.swiggy.com/city/kalaburagi",
              },
              {
                text: "Gaya",
                link: "https://www.swiggy.com/city/gaya",
              },
              {
                text: "Muzaffarnagar",
                link: "https://www.swiggy.com/city/muzaffarnagar",
              },
              {
                text: "Dewas",
                link: "https://www.swiggy.com/city/dewas",
              },
              {
                text: "Korba",
                link: "https://www.swiggy.com/city/korba",
              },
              {
                text: "Mussoorie",
                link: "https://www.swiggy.com/city/mussoorie",
              },
              {
                text: "Jalgaon",
                link: "https://www.swiggy.com/city/jalgaon",
              },
              {
                text: "Yamuna Nagar",
                link: "https://www.swiggy.com/city/yamuna-nagar",
              },
              {
                text: "Bhagalpur",
                link: "https://www.swiggy.com/city/bhagalpur",
              },
              {
                text: "Hapur",
                link: "https://www.swiggy.com/city/hapur",
              },
              {
                text: "Morena",
                link: "https://www.swiggy.com/city/morena",
              },
              {
                text: "Hassan",
                link: "https://www.swiggy.com/city/hassan",
              },
              {
                text: "Hisar",
                link: "https://www.swiggy.com/city/hisar",
              },
              {
                text: "Godhra",
                link: "https://www.swiggy.com/city/godhra",
              },
              {
                text: "Kolar ",
                link: "https://www.swiggy.com/city/kolar",
              },
              {
                text: "Rampur",
                link: "https://www.swiggy.com/city/rampur",
              },
              {
                text: "Sitapur",
                link: "https://www.swiggy.com/city/sitapur",
              },
              {
                text: "Etawah",
                link: "https://www.swiggy.com/city/etawah",
              },
              {
                text: "Porbandar",
                link: "https://www.swiggy.com/city/porbandar",
              },
              {
                text: "Nadiad",
                link: "https://www.swiggy.com/city/nadiad",
              },
              {
                text: "Sagar",
                link: "https://www.swiggy.com/city/sagar",
              },
              {
                text: "Morbi",
                link: "https://www.swiggy.com/city/morbi",
              },
              {
                text: "Chhindwara",
                link: "https://www.swiggy.com/city/chhindwara",
              },
              {
                text: "Tumakuru",
                link: "https://www.swiggy.com/city/tumakuru",
              },
              {
                text: "Singrauli",
                link: "https://www.swiggy.com/city/singrauli",
              },
              {
                text: "Thoothukudi",
                link: "https://www.swiggy.com/city/thoothukudi",
              },
              {
                text: "Katni",
                link: "https://www.swiggy.com/city/katni",
              },
              {
                text: "Khandwa",
                link: "https://www.swiggy.com/city/khandwa",
              },
              {
                text: "Eluru",
                link: "https://www.swiggy.com/city/eluru",
              },
              {
                text: "Malappuram",
                link: "https://www.swiggy.com/city/malappuram",
              },
              {
                text: "Dibrugarh",
                link: "https://www.swiggy.com/city/dibrugarh",
              },
              {
                text: "Deoghar",
                link: "https://www.swiggy.com/city/deoghar",
              },
              {
                text: "Khanna",
                link: "https://www.swiggy.com/city/khanna",
              },
              {
                text: "Bidar",
                link: "https://www.swiggy.com/city/bidar",
              },
              {
                text: "Madikeri",
                link: "https://www.swiggy.com/city/madikeri",
              },
              {
                text: "Haldwani",
                link: "https://www.swiggy.com/city/haldwani",
              },
              {
                text: "Farrukhabad",
                link: "https://www.swiggy.com/city/farrukhabad",
              },
              {
                text: "Malegaon",
                link: "https://www.swiggy.com/city/malegaon",
              },
              {
                text: "Dindigul",
                link: "https://www.swiggy.com/city/dindigul",
              },
              {
                text: "Shahjahanpur",
                link: "https://www.swiggy.com/city/shahjahanpur",
              },
              {
                text: "Beed",
                link: "https://www.swiggy.com/city/beed",
              },
              {
                text: "Junagadh",
                link: "https://www.swiggy.com/city/junagadh",
              },
              {
                text: "Asansol",
                link: "https://www.swiggy.com/city/asansol",
              },
              {
                text: "Beawar",
                link: "https://www.swiggy.com/city/beawar",
              },
              {
                text: "Kishangarh",
                link: "https://www.swiggy.com/city/kishangarh",
              },
              {
                text: "Parbhani",
                link: "https://www.swiggy.com/city/parbhani",
              },
              {
                text: "Gondia",
                link: "https://www.swiggy.com/city/gondia",
              },
              {
                text: "Ichalkaranji",
                link: "https://www.swiggy.com/city/ichalkaranji",
              },
              {
                text: "Jalna",
                link: "https://www.swiggy.com/city/jalna",
              },
              {
                text: "Yavatmal",
                link: "https://www.swiggy.com/city/yavatmal",
              },
              {
                text: "Shivpuri",
                link: "https://www.swiggy.com/city/shivpuri",
              },
              {
                text: "Moga",
                link: "https://www.swiggy.com/city/moga",
              },
              {
                text: "Abohar",
                link: "https://www.swiggy.com/city/abohar",
              },
              {
                text: "Adoni",
                link: "https://www.swiggy.com/city/adoni",
              },
              {
                text: "Madanapalle",
                link: "https://www.swiggy.com/city/madanapalle",
              },
              {
                text: "Tiruvannamalai",
                link: "https://www.swiggy.com/city/tiruvannamalai",
              },
              {
                text: "Satara",
                link: "https://www.swiggy.com/city/satara",
              },
              {
                text: "Ambur",
                link: "https://www.swiggy.com/city/ambur",
              },
              {
                text: "Karimnagar",
                link: "https://www.swiggy.com/city/karimnagar",
              },
              {
                text: "Ratlam",
                link: "https://www.swiggy.com/city/ratlam",
              },
              {
                text: "Moradabad",
                link: "https://www.swiggy.com/city/moradabad",
              },
              {
                text: "Machilipatnam",
                link: "https://www.swiggy.com/city/machilipatnam",
              },
              {
                text: "Ongole",
                link: "https://www.swiggy.com/city/ongole",
              },
              {
                text: "Kottayam",
                link: "https://www.swiggy.com/city/kottayam",
              },
              {
                text: "Darbhanga",
                link: "https://www.swiggy.com/city/darbhanga",
              },
              {
                text: "Kurukshetra",
                link: "https://www.swiggy.com/city/kurukshetra",
              },
              {
                text: "Unnao",
                link: "https://www.swiggy.com/city/unnao",
              },
              {
                text: "Bulandshahr",
                link: "https://www.swiggy.com/city/bulandshahr",
              },
              {
                text: "Durgapur",
                link: "https://www.swiggy.com/city/durgapur",
              },
              {
                text: "Siliguri",
                link: "https://www.swiggy.com/city/siliguri",
              },
              {
                text: "Pali",
                link: "https://www.swiggy.com/city/pali",
              },
              {
                text: "Tadepalligudem",
                link: "https://www.swiggy.com/city/tadepalligudem",
              },
              {
                text: "Ramagundam",
                link: "https://www.swiggy.com/city/ramagundam",
              },
              {
                text: "Mahbubnagar",
                link: "https://www.swiggy.com/city/mahbubnagar",
              },
              {
                text: "Bhiwani",
                link: "https://www.swiggy.com/city/bhiwani",
              },
              {
                text: "Cuddalore",
                link: "https://www.swiggy.com/city/cuddalore",
              },
              {
                text: "Kaithal",
                link: "https://www.swiggy.com/city/kaithal",
              },
              {
                text: "Jagtial",
                link: "https://www.swiggy.com/city/jagtial",
              },
              {
                text: "Palakkad",
                link: "https://www.swiggy.com/city/palakkad",
              },
              {
                text: "Guna",
                link: "https://www.swiggy.com/city/guna",
              },
              {
                text: "Kumbakonam",
                link: "https://www.swiggy.com/city/kumbakonam",
              },
              {
                text: "Maunath Bhanjan",
                link: "https://www.swiggy.com/city/maunath-bhanjan",
              },
              {
                text: "Baripada",
                link: "https://www.swiggy.com/city/baripada",
              },
              {
                text: "Orai",
                link: "https://www.swiggy.com/city/orai",
              },
              {
                text: "Bhadrak",
                link: "https://www.swiggy.com/city/bhadrak",
              },
              {
                text: "Batala",
                link: "https://www.swiggy.com/city/batala",
              },
              {
                text: "Firozpur",
                link: "https://www.swiggy.com/city/firozpur",
              },
              {
                text: "Barnala",
                link: "https://www.swiggy.com/city/barnala",
              },
              {
                text: "Raigarh",
                link: "https://www.swiggy.com/city/raigarh",
              },
              {
                text: "Nagaon",
                link: "https://www.swiggy.com/city/nagaon",
              },
              {
                text: "Mainpuri",
                link: "https://www.swiggy.com/city/mainpuri",
              },
              {
                text: "Balurghat",
                link: "https://www.swiggy.com/city/balurghat",
              },
              {
                text: "Giridih",
                link: "https://www.swiggy.com/city/giridih",
              },
              {
                text: "Ghazipur",
                link: "https://www.swiggy.com/city/ghazipur",
              },
              {
                text: "Jagdalpur",
                link: "https://www.swiggy.com/city/jagdalpur",
              },
              {
                text: "Vidisha",
                link: "https://www.swiggy.com/city/vidisha",
              },
              {
                text: "Dimapur",
                link: "https://www.swiggy.com/city/dimapur",
              },
              {
                text: "Shikohabad",
                link: "https://www.swiggy.com/city/shikohabad",
              },
              {
                text: "Imphal",
                link: "https://www.swiggy.com/city/imphal",
              },
              {
                text: "Lakhimpur",
                link: "https://www.swiggy.com/city/lakhimpur",
              },
              {
                text: "Rudrapur",
                link: "https://www.swiggy.com/city/rudrapur",
              },
              {
                text: "Ambikapur",
                link: "https://www.swiggy.com/city/ambikapur",
              },
              {
                text: "Rae Bareli",
                link: "https://www.swiggy.com/city/rae-bareli",
              },
              {
                text: "Tinsukia",
                link: "https://www.swiggy.com/city/tinsukia",
              },
              {
                text: "Rajapalayam",
                link: "https://www.swiggy.com/city/rajapalayam",
              },
              {
                text: "Rajnandgaon",
                link: "https://www.swiggy.com/city/rajnandgaon",
              },
              {
                text: "Kashipur",
                link: "https://www.swiggy.com/city/kashipur",
              },
              {
                text: "Ranibennur",
                link: "https://www.swiggy.com/city/ranibennur",
              },
              {
                text: "Burhanpur",
                link: "https://www.swiggy.com/city/burhanpur",
              },
              {
                text: "Bhadravati",
                link: "https://www.swiggy.com/city/bhadravati",
              },
              {
                text: "Chittoor",
                link: "https://www.swiggy.com/city/chittoor",
              },
              {
                text: "Pudukkottai",
                link: "https://www.swiggy.com/city/pudukkottai",
              },
              {
                text: "Hardoi",
                link: "https://www.swiggy.com/city/hardoi",
              },
              {
                text: "Basti",
                link: "https://www.swiggy.com/city/basti",
              },
              {
                text: "Karaikkudi",
                link: "https://www.swiggy.com/city/karaikkudi",
              },
              {
                text: "Lalitpur",
                link: "https://www.swiggy.com/city/lalitpur",
              },
              {
                text: "Hospet",
                link: "https://www.swiggy.com/city/hospet",
              },
              {
                text: "Budaun",
                link: "https://www.swiggy.com/city/budaun",
              },
              {
                text: "Neemuch",
                link: "https://www.swiggy.com/city/neemuch",
              },
              {
                text: "Pilibhit",
                link: "https://www.swiggy.com/city/pilibhit",
              },
              {
                text: "Barshi",
                link: "https://www.swiggy.com/city/barshi",
              },
              {
                text: "Sri Ganganagar",
                link: "https://www.swiggy.com/city/sri-ganganagar",
              },
              {
                text: "Wardha",
                link: "https://www.swiggy.com/city/wardha",
              },
              {
                text: "Sehore",
                link: "https://www.swiggy.com/city/sehore",
              },
              {
                text: "Bhimavaram",
                link: "https://www.swiggy.com/city/bhimavaram",
              },
              {
                text: "Hanumangarh",
                link: "https://www.swiggy.com/city/hanumangarh",
              },
              {
                text: "Pathankot",
                link: "https://www.swiggy.com/city/pathankot",
              },
              {
                text: "Puri",
                link: "https://www.swiggy.com/city/puri",
              },
              {
                text: "Fatehpur",
                link: "https://www.swiggy.com/city/fatehpur",
              },
              {
                text: "Surendranagar Dudhrej",
                link: "https://www.swiggy.com/city/surendranagar-dudhrej",
              },
              {
                text: "Jamnagar",
                link: "https://www.swiggy.com/city/jamnagar",
              },
              {
                text: "Bhuj",
                link: "https://www.swiggy.com/city/bhuj",
              },
              {
                text: "Gandhidham",
                link: "https://www.swiggy.com/city/gandhidham",
              },
              {
                text: "Bharuch",
                link: "https://www.swiggy.com/city/bharuch",
              },
              {
                text: "Navsari",
                link: "https://www.swiggy.com/city/navsari",
              },
              {
                text: "Amreli",
                link: "https://www.swiggy.com/city/amreli",
              },
              {
                text: "Palanpur",
                link: "https://www.swiggy.com/city/palanpur",
              },
              {
                text: "Bhilwara",
                link: "https://www.swiggy.com/city/bhilwara",
              },
              {
                text: "Suratgarh",
                link: "https://www.swiggy.com/city/suratgarh",
              },
              {
                text: "Sikar",
                link: "https://www.swiggy.com/city/sikar",
              },
              {
                text: "Churu",
                link: "https://www.swiggy.com/city/churu",
              },
              {
                text: "Alwar",
                link: "https://www.swiggy.com/city/alwar",
              },
              {
                text: "Bhiwadi",
                link: "https://www.swiggy.com/city/bhiwadi",
              },
              {
                text: "Bharatpur",
                link: "https://www.swiggy.com/city/bharatpur",
              },
              {
                text: "Mount Abu",
                link: "https://www.swiggy.com/city/mount-abu",
              },
              {
                text: "Bundi",
                link: "https://www.swiggy.com/city/bundi",
              },
              {
                text: "Sawai Madhopur",
                link: "https://www.swiggy.com/city/sawai-madhopur",
              },
              {
                text: "Purulia",
                link: "https://www.swiggy.com/city/purulia",
              },
              {
                text: "Bardhaman",
                link: "https://www.swiggy.com/city/bardhaman",
              },
              {
                text: "Raniganj",
                link: "https://www.swiggy.com/city/raniganj",
              },
              {
                text: "Darjeeling",
                link: "https://www.swiggy.com/city/darjeeling",
              },
              {
                text: "Jalpaiguri",
                link: "https://www.swiggy.com/city/jalpaiguri",
              },
              {
                text: "Chittorgarh",
                link: "https://www.swiggy.com/city/chittorgarh",
              },
              {
                text: "Dholpur",
                link: "https://www.swiggy.com/city/dholpur",
              },
              {
                text: "Uluberia",
                link: "https://www.swiggy.com/city/uluberia",
              },
              {
                text: "Nabadwip",
                link: "https://www.swiggy.com/city/nabadwip",
              },
              {
                text: "Bongaon",
                link: "https://www.swiggy.com/city/bongaon",
              },
              {
                text: "Kanchrapara",
                link: "https://www.swiggy.com/city/kanchrapara",
              },
              {
                text: "Habra",
                link: "https://www.swiggy.com/city/habra",
              },
              {
                text: "Firozabad",
                link: "https://www.swiggy.com/city/firozabad",
              },
              {
                text: "Nalgonda",
                link: "https://www.swiggy.com/city/nalgonda",
              },
              {
                text: "Chandrapur",
                link: "https://www.swiggy.com/city/chandrapur",
              },
              {
                text: "Bijapur",
                link: "https://www.swiggy.com/city/bijapur",
              },
              {
                text: "Bhusawal",
                link: "https://www.swiggy.com/city/bhusawal",
              },
              {
                text: "Raichur",
                link: "https://www.swiggy.com/city/raichur",
              },
              {
                text: "Bahraich",
                link: "https://www.swiggy.com/city/bahraich",
              },
              {
                text: "Azamgarh",
                link: "https://www.swiggy.com/city/azamgarh",
              },
              {
                text: "Bahadurgarh",
                link: "https://www.swiggy.com/city/bahadurgarh",
              },
              {
                text: "Jind",
                link: "https://www.swiggy.com/city/jind",
              },
              {
                text: "Rewari",
                link: "https://www.swiggy.com/city/rewari",
              },
              {
                text: "Palwal",
                link: "https://www.swiggy.com/city/palwal",
              },
              {
                text: "Hathras",
                link: "https://www.swiggy.com/city/hathras",
              },
              {
                text: "Sambalpur",
                link: "https://www.swiggy.com/city/sambalpur",
              },
              {
                text: "Banda",
                link: "https://www.swiggy.com/city/banda",
              },
              {
                text: "Hoshiarpur",
                link: "https://www.swiggy.com/city/hoshiarpur",
              },
              {
                text: "Faridkot",
                link: "https://www.swiggy.com/city/faridkot",
              },
              {
                text: "Mandsaur",
                link: "https://www.swiggy.com/city/mandsaur",
              },
              {
                text: "Suryapet",
                link: "https://www.swiggy.com/city/suryapet",
              },
              {
                text: "Adilabad",
                link: "https://www.swiggy.com/city/adilabad",
              },
              {
                text: "Narasaraopet",
                link: "https://www.swiggy.com/city/narasaraopet",
              },
              {
                text: "Faizabad",
                link: "https://www.swiggy.com/city/faizabad",
              },
              {
                text: "Tadpatri",
                link: "https://www.swiggy.com/city/tadpatri",
              },
              {
                text: "Gonda",
                link: "https://www.swiggy.com/city/gonda",
              },
              {
                text: "Mughalsarai",
                link: "https://www.swiggy.com/city/mughalsarai",
              },
              {
                text: "Medinipur",
                link: "https://www.swiggy.com/city/medinipur",
              },
              {
                text: "Nagda",
                link: "https://www.swiggy.com/city/nagda",
              },
              {
                text: "Raiganj",
                link: "https://www.swiggy.com/city/raiganj",
              },
              {
                text: "Deoria City",
                link: "https://www.swiggy.com/city/deoria-city",
              },
              {
                text: "Sultanpur",
                link: "https://www.swiggy.com/city/sultanpur",
              },
              {
                text: "Shamli",
                link: "https://www.swiggy.com/city/shamli",
              },
              {
                text: "Krishnanagar",
                link: "https://www.swiggy.com/city/krishnanagar",
              },
              {
                text: "Ballia",
                link: "https://www.swiggy.com/city/ballia",
              },
              {
                text: "Guntakal",
                link: "https://www.swiggy.com/city/guntakal",
              },
              {
                text: "Miryalaguda",
                link: "https://www.swiggy.com/city/miryalaguda",
              },
              {
                text: "Etah",
                link: "https://www.swiggy.com/city/etah",
              },
              {
                text: "Berhampore",
                link: "https://www.swiggy.com/city/berhampore",
              },
              {
                text: "Gudivada",
                link: "https://www.swiggy.com/city/gudivada",
              },
              {
                text: "Haldia",
                link: "https://www.swiggy.com/city/haldia",
              },
              {
                text: "Santipur",
                link: "https://www.swiggy.com/city/santipur",
              },
              {
                text: "Basirhat",
                link: "https://www.swiggy.com/city/basirhat",
              },
              {
                text: "Udgir",
                link: "https://www.swiggy.com/city/udgir",
              },
              {
                text: "Proddatur",
                link: "https://www.swiggy.com/city/proddatur",
              },
              {
                text: "Nagapattinam",
                link: "https://www.swiggy.com/city/nagapattinam",
              },
              {
                text: "Chikmagalur",
                link: "https://www.swiggy.com/city/chikmagalur",
              },
              {
                text: "Chandausi",
                link: "https://www.swiggy.com/city/chandausi",
              },
              {
                text: "Bhind",
                link: "https://www.swiggy.com/city/bhind",
              },
              {
                text: "Mandya",
                link: "https://www.swiggy.com/city/mandya",
              },
              {
                text: "Bagalkot",
                link: "https://www.swiggy.com/city/bagalkot",
              },
              {
                text: "Nandurbar",
                link: "https://www.swiggy.com/city/nandurbar",
              },
              {
                text: "Chitradurga",
                link: "https://www.swiggy.com/city/chitradurga",
              },
              {
                text: "Osmanabad",
                link: "https://www.swiggy.com/city/osmanabad",
              },
              {
                text: "Modinagar",
                link: "https://www.swiggy.com/city/modinagar",
              },
              {
                text: "Gadag-Betigeri",
                link: "https://www.swiggy.com/city/gadag-betigeri",
              },
              {
                text: "Hoshangabad",
                link: "https://www.swiggy.com/city/hoshangabad",
              },
              {
                text: "Jaunpur",
                link: "https://www.swiggy.com/city/jaunpur",
              },
              {
                text: "Port Blair",
                link: "https://www.swiggy.com/city/port-blair",
              },
              {
                text: "Jorhat",
                link: "https://www.swiggy.com/city/jorhat",
              },
              {
                text: "Nandyal",
                link: "https://www.swiggy.com/city/nandyal",
              },
              {
                text: "Biharsharif",
                link: "https://www.swiggy.com/city/biharsharif",
              },
              {
                text: "Buxar",
                link: "https://www.swiggy.com/city/buxar",
              },
              {
                text: "Siwan",
                link: "https://www.swiggy.com/city/siwan",
              },
              {
                text: "Dehri",
                link: "https://www.swiggy.com/city/dehri",
              },
              {
                text: "Bettiah",
                link: "https://www.swiggy.com/city/bettiah",
              },
              {
                text: "Kishanganj",
                link: "https://www.swiggy.com/city/kishanganj",
              },
              {
                text: "Saharsa",
                link: "https://www.swiggy.com/city/saharsa",
              },
              {
                text: "Hajipur",
                link: "https://www.swiggy.com/city/hajipur",
              },
              {
                text: "Motihari",
                link: "https://www.swiggy.com/city/motihari",
              },
              {
                text: "Sasaram",
                link: "https://www.swiggy.com/city/sasaram",
              },
              {
                text: "Munger",
                link: "https://www.swiggy.com/city/munger",
              },
              {
                text: "Katihar",
                link: "https://www.swiggy.com/city/katihar",
              },
              {
                text: "Arrah",
                link: "https://www.swiggy.com/city/arrah",
              },
              {
                text: "Srikakulam",
                link: "https://www.swiggy.com/city/srikakulam",
              },
              {
                text: "Begusarai",
                link: "https://www.swiggy.com/city/begusarai",
              },
              {
                text: "Neyveli",
                link: "https://www.swiggy.com/city/neyveli",
              },
              {
                text: "Waidhan",
                link: "https://www.swiggy.com/city/waidhan",
              },
              {
                text: "Markapur",
                link: "https://www.swiggy.com/city/markapur",
              },
              {
                text: "Chikkaballapur",
                link: "https://www.swiggy.com/city/chikkaballapur",
              },
              {
                text: "Bhatkal",
                link: "https://www.swiggy.com/city/bhatkal",
              },
              {
                text: "Gokak",
                link: "https://www.swiggy.com/city/gokak",
              },
              {
                text: "Itarsi",
                link: "https://www.swiggy.com/city/itarsi",
              },
              {
                text: "Dhar",
                link: "https://www.swiggy.com/city/dhar",
              },
              {
                text: "Chalisgaon",
                link: "https://www.swiggy.com/city/chalisgaon",
              },
              {
                text: "Thiruvallur",
                link: "https://www.swiggy.com/city/thiruvallur",
              },
              {
                text: "Namakkal",
                link: "https://www.swiggy.com/city/namakkal",
              },
              {
                text: "Dharmapuri",
                link: "https://www.swiggy.com/city/dharmapuri",
              },
              {
                text: "Bhandara",
                link: "https://www.swiggy.com/city/bhandara",
              },
              {
                text: "Virudhunagar",
                link: "https://www.swiggy.com/city/virudhunagar",
              },
              {
                text: "Siddipet",
                link: "https://www.swiggy.com/city/siddipet",
              },
              {
                text: "Gadwal",
                link: "https://www.swiggy.com/city/gadwal",
              },
              {
                text: "Bodhan-Rural",
                link: "https://www.swiggy.com/city/bodhan-rural",
              },
              {
                text: "Kamareddy",
                link: "https://www.swiggy.com/city/kamareddy",
              },
              {
                text: "Jhunjhunu",
                link: "https://www.swiggy.com/city/jhunjhunu",
              },
              {
                text: "Kapurthala",
                link: "https://www.swiggy.com/city/kapurthala",
              },
              {
                text: "Sangrur",
                link: "https://www.swiggy.com/city/sangrur",
              },
              {
                text: "Gurdaspur",
                link: "https://www.swiggy.com/city/gurdaspur",
              },
              {
                text: "Ramgarh",
                link: "https://www.swiggy.com/city/ramgarh",
              },
              {
                text: "Bantwal",
                link: "https://www.swiggy.com/city/bantwal",
              },
              {
                text: "Doddaballapura",
                link: "https://www.swiggy.com/city/doddaballapura",
              },
              {
                text: "Buldana",
                link: "https://www.swiggy.com/city/buldana",
              },
              {
                text: "Karad",
                link: "https://www.swiggy.com/city/karad",
              },
              {
                text: "Krishnagiri",
                link: "https://www.swiggy.com/city/krishnagiri",
              },
              {
                text: "Tiptur",
                link: "https://www.swiggy.com/city/tiptur",
              },
              {
                text: "Bhadrachalam",
                link: "https://www.swiggy.com/city/bhadrachalam",
              },
              {
                text: "Mancherial",
                link: "https://www.swiggy.com/city/mancherial",
              },
              {
                text: "Balrampur",
                link: "https://www.swiggy.com/city/balrampur",
              },
              {
                text: "Bharabanki",
                link: "https://www.swiggy.com/city/bharabanki",
              },
              {
                text: "Malout",
                link: "https://www.swiggy.com/city/malout",
              },
              {
                text: "Fatehgarh Sahib",
                link: "https://www.swiggy.com/city/fatehgarh-sahib",
              },
              {
                text: "Ropar",
                link: "https://www.swiggy.com/city/ropar",
              },
              {
                text: "Nangal",
                link: "https://www.swiggy.com/city/nangal",
              },
              {
                text: "Narnaul",
                link: "https://www.swiggy.com/city/narnaul",
              },
              {
                text: "Naraingarh",
                link: "https://www.swiggy.com/city/naraingarh",
              },
              {
                text: "Himmatnagar",
                link: "https://www.swiggy.com/city/himmatnagar",
              },
              {
                text: "Dausa",
                link: "https://www.swiggy.com/city/dausa",
              },
              {
                text: "Jahanabad",
                link: "https://www.swiggy.com/city/jahanabad",
              },
              {
                text: "Samastipur",
                link: "https://www.swiggy.com/city/samastipur",
              },
              {
                text: "Purnea",
                link: "https://www.swiggy.com/city/purnea",
              },
              {
                text: "Berhampur",
                link: "https://www.swiggy.com/city/berhampur",
              },
              {
                text: "Malda",
                link: "https://www.swiggy.com/city/malda",
              },
              {
                text: "Tuni",
                link: "https://www.swiggy.com/city/tuni",
              },
              {
                text: "Puttur",
                link: "https://www.swiggy.com/city/puttur",
              },
              {
                text: "Rayachoty",
                link: "https://www.swiggy.com/city/rayachoty",
              },
              {
                text: "Nirmal",
                link: "https://www.swiggy.com/city/nirmal",
              },
              {
                text: "Mirzapur",
                link: "https://www.swiggy.com/city/mirzapur",
              },
              {
                text: "Tanuku",
                link: "https://www.swiggy.com/city/tanuku",
              },
              {
                text: "Dahod",
                link: "https://www.swiggy.com/city/dahod",
              },
              {
                text: "Barmer",
                link: "https://www.swiggy.com/city/barmer",
              },
              {
                text: "Gangapur City",
                link: "https://www.swiggy.com/city/gangapur-city",
              },
              {
                text: "Mandi Gobindgarh",
                link: "https://www.swiggy.com/city/mandi-gobindgarh",
              },
              {
                text: "Tarn Taran Sahib",
                link: "https://www.swiggy.com/city/tarn-taran-sahib",
              },
              {
                text: "Nakodar",
                link: "https://www.swiggy.com/city/nakodar",
              },
              {
                text: "Ankleshwar",
                link: "https://www.swiggy.com/city/ankleshwar",
              },
              {
                text: "Vyara",
                link: "https://www.swiggy.com/city/vyara",
              },
              {
                text: "Bardoli",
                link: "https://www.swiggy.com/city/bardoli",
              },
              {
                text: "Halol",
                link: "https://www.swiggy.com/city/halol",
              },
              {
                text: "Bijnor",
                link: "https://www.swiggy.com/city/bijnor",
              },
              {
                text: "Sangamner",
                link: "https://www.swiggy.com/city/sangamner",
              },
              {
                text: "Baramati",
                link: "https://www.swiggy.com/city/baramati",
              },
              {
                text: "Betul",
                link: "https://www.swiggy.com/city/betul",
              },
              {
                text: "Chhatarpur",
                link: "https://www.swiggy.com/city/chhatarpur",
              },
              {
                text: "Balaghat",
                link: "https://www.swiggy.com/city/balaghat",
              },
              {
                text: "Sivakasi",
                link: "https://www.swiggy.com/city/sivakasi",
              },
              {
                text: "Viluppuram",
                link: "https://www.swiggy.com/city/viluppuram",
              },
              {
                text: "Ramanathapuram",
                link: "https://www.swiggy.com/city/ramanathapuram",
              },
              {
                text: "Sirsi",
                link: "https://www.swiggy.com/city/sirsi",
              },
              {
                text: "Theni",
                link: "https://www.swiggy.com/city/theni",
              },
              {
                text: "Karur",
                link: "https://www.swiggy.com/city/karur",
              },
              {
                text: "Karwar",
                link: "https://www.swiggy.com/city/karwar",
              },
              {
                text: "Sindhanur",
                link: "https://www.swiggy.com/city/sindhanur",
              },
              {
                text: "Kannur",
                link: "https://www.swiggy.com/city/kannur",
              },
              {
                text: "Noida 1",
                link: "https://www.swiggy.com/city/noida-1",
              },
              {
                text: "Thiruvalla",
                link: "https://www.swiggy.com/city/thiruvalla",
              },
              {
                text: "Thodupuzha",
                link: "https://www.swiggy.com/city/thodupuzha",
              },
              {
                text: "Kadiri",
                link: "https://www.swiggy.com/city/kadiri",
              },
              {
                text: "Kavali",
                link: "https://www.swiggy.com/city/kavali",
              },
              {
                text: "Tezpur",
                link: "https://www.swiggy.com/city/tezpur",
              },
              {
                text: "Kayamkulam",
                link: "https://www.swiggy.com/city/kayamkulam",
              },
              {
                text: "Kottarakkara",
                link: "https://www.swiggy.com/city/kottarakkara",
              },
              {
                text: "Mandi Dabwali",
                link: "https://www.swiggy.com/city/mandi-dabwali",
              },
              {
                text: "Fatehabad",
                link: "https://www.swiggy.com/city/fatehabad",
              },
              {
                text: "Jagraon",
                link: "https://www.swiggy.com/city/jagraon",
              },
              {
                text: "Mansa",
                link: "https://www.swiggy.com/city/mansa",
              },
              {
                text: "Pinjore City",
                link: "https://www.swiggy.com/city/pinjore-city",
              },
              {
                text: "Fazilka",
                link: "https://www.swiggy.com/city/fazilka",
              },
              {
                text: "Baddi",
                link: "https://www.swiggy.com/city/baddi",
              },
              {
                text: "Solan",
                link: "https://www.swiggy.com/city/solan",
              },
              {
                text: "Daltonganj",
                link: "https://www.swiggy.com/city/daltonganj",
              },
              {
                text: "Balangir",
                link: "https://www.swiggy.com/city/balangir",
              },
              {
                text: "Kothagudem",
                link: "https://www.swiggy.com/city/kothagudem",
              },
              {
                text: "Hansi",
                link: "https://www.swiggy.com/city/hansi",
              },
              {
                text: "Aurangabad_Bihar",
                link: "https://www.swiggy.com/city/aurangabadbihar",
              },
              {
                text: "Gopalganj",
                link: "https://www.swiggy.com/city/gopalganj",
              },
              {
                text: "Jharsuguda",
                link: "https://www.swiggy.com/city/jharsuguda",
              },
              {
                text: "Tohana",
                link: "https://www.swiggy.com/city/tohana",
              },
              {
                text: "Jhalawar",
                link: "https://www.swiggy.com/city/jhalawar",
              },
              {
                text: "Sivasagar",
                link: "https://www.swiggy.com/city/sivasagar",
              },
              {
                text: "Bagdogra",
                link: "https://www.swiggy.com/city/bagdogra",
              },
              {
                text: "Kendrapada",
                link: "https://www.swiggy.com/city/kendrapada",
              },
              {
                text: "Mallapuram (Do not Use)",
                link: "https://www.swiggy.com/city/mallapuram-do-not-use",
              },
              {
                text: "Veraval",
                link: "https://www.swiggy.com/city/veraval",
              },
              {
                text: "Daman",
                link: "https://www.swiggy.com/city/daman",
              },
              {
                text: "Chiplun",
                link: "https://www.swiggy.com/city/chiplun",
              },
              {
                text: "Silvassa",
                link: "https://www.swiggy.com/city/silvassa",
              },
              {
                text: "Lonavla",
                link: "https://www.swiggy.com/city/lonavla",
              },
              {
                text: "Bongaigaon",
                link: "https://www.swiggy.com/city/bongaigaon",
              },
              {
                text: "Golaghat",
                link: "https://www.swiggy.com/city/golaghat",
              },
              {
                text: "Duliajan",
                link: "https://www.swiggy.com/city/duliajan",
              },
              {
                text: "Bolpur",
                link: "https://www.swiggy.com/city/bolpur",
              },
              {
                text: "Madhubani",
                link: "https://www.swiggy.com/city/madhubani",
              },
              {
                text: "Balasore",
                link: "https://www.swiggy.com/city/balasore",
              },
              {
                text: "Palampur",
                link: "https://www.swiggy.com/city/palampur",
              },
              {
                text: "Kotdwar",
                link: "https://www.swiggy.com/city/kotdwar",
              },
              {
                text: "Koppal",
                link: "https://www.swiggy.com/city/koppal",
              },
              {
                text: "Chikhli",
                link: "https://www.swiggy.com/city/chikhli",
              },
              {
                text: "Dahanu",
                link: "https://www.swiggy.com/city/dahanu",
              },
              {
                text: "Itanagar",
                link: "https://www.swiggy.com/city/itanagar",
              },
              {
                text: "Rangpo",
                link: "https://www.swiggy.com/city/rangpo",
              },
              {
                text: "Aizawl",
                link: "https://www.swiggy.com/city/aizawl",
              },
              {
                text: "Gangtok",
                link: "https://www.swiggy.com/city/gangtok",
              },
              {
                text: "Mayiladuthurai",
                link: "https://www.swiggy.com/city/mayiladuthurai",
              },
              {
                text: "Kannauj",
                link: "https://www.swiggy.com/city/kannauj",
              },
              {
                text: "Cooch Behar",
                link: "https://www.swiggy.com/city/cooch-behar",
              },
              {
                text: "Palani",
                link: "https://www.swiggy.com/city/palani",
              },
              {
                text: "Bilimora",
                link: "https://www.swiggy.com/city/bilimora",
              },
              {
                text: "Boisar",
                link: "https://www.swiggy.com/city/boisar",
              },
              {
                text: "Kohima",
                link: "https://www.swiggy.com/city/kohima",
              },
              {
                text: "Naharlagun",
                link: "https://www.swiggy.com/city/naharlagun",
              },
              {
                text: "Dumka",
                link: "https://www.swiggy.com/city/dumka",
              },
              {
                text: "Rajsamand",
                link: "https://www.swiggy.com/city/rajsamand",
              },
              {
                text: "Gauriganj",
                link: "https://www.swiggy.com/city/gauriganj",
              },
              {
                text: "Bodinayakanur",
                link: "https://www.swiggy.com/city/bodinayakanur",
              },
              {
                text: "Bhawanipatna",
                link: "https://www.swiggy.com/city/bhawanipatna",
              },
              {
                text: "Baran",
                link: "https://www.swiggy.com/city/baran",
              },
              {
                text: "Narsinghpur",
                link: "https://www.swiggy.com/city/narsinghpur",
              },
              {
                text: "Kovilpatti",
                link: "https://www.swiggy.com/city/kovilpatti",
              },
              {
                text: "Pusad",
                link: "https://www.swiggy.com/city/pusad",
              },
              {
                text: "Kendujhar",
                link: "https://www.swiggy.com/city/kendujhar",
              },
              {
                text: "Manali",
                link: "https://www.swiggy.com/city/manali",
              },
              {
                text: "Diu",
                link: "https://www.swiggy.com/city/diu",
              },
              {
                text: "Khamgaon",
                link: "https://www.swiggy.com/city/khamgaon",
              },
              {
                text: "Ramanagara",
                link: "https://www.swiggy.com/city/ramanagara",
              },
              {
                text: "Alipurduar",
                link: "https://www.swiggy.com/city/alipurduar",
              },
              {
                text: "Almora",
                link: "https://www.swiggy.com/city/almora",
              },
              {
                text: "Jhargram",
                link: "https://www.swiggy.com/city/jhargram",
              },
              {
                text: "Arambagh",
                link: "https://www.swiggy.com/city/arambagh",
              },
              {
                text: "Bhadohi",
                link: "https://www.swiggy.com/city/bhadohi",
              },
              {
                text: "Tenkasi",
                link: "https://www.swiggy.com/city/tenkasi",
              },
              {
                text: "Srivilliputhur",
                link: "https://www.swiggy.com/city/srivilliputhur",
              },
              {
                text: "Chidambaram",
                link: "https://www.swiggy.com/city/chidambaram",
              },
              {
                text: "Rajgarh",
                link: "https://www.swiggy.com/city/rajgarh",
              },
              {
                text: "Pratapgarh",
                link: "https://www.swiggy.com/city/pratapgarh",
              },
              {
                text: "Washim",
                link: "https://www.swiggy.com/city/washim",
              },
              {
                text: "Raghunathpur",
                link: "https://www.swiggy.com/city/raghunathpur",
              },
              {
                text: "Suri",
                link: "https://www.swiggy.com/city/suri",
              },
              {
                text: "Kadayanallur",
                link: "https://www.swiggy.com/city/kadayanallur",
              },
              {
                text: "Thiruvarur",
                link: "https://www.swiggy.com/city/thiruvarur",
              },
              {
                text: "Ranaghat-WB",
                link: "https://www.swiggy.com/city/ranaghat-wb",
              },
              {
                text: "Wayanad",
                link: "https://www.swiggy.com/city/wayanad",
              },
              {
                text: "Perambalur",
                link: "https://www.swiggy.com/city/perambalur",
              },
              {
                text: "Paramakudi",
                link: "https://www.swiggy.com/city/paramakudi",
              },
              {
                text: "Bela Pratapgarh",
                link: "https://www.swiggy.com/city/bela-pratapgarh",
              },
              {
                text: "Mahoba",
                link: "https://www.swiggy.com/city/mahoba",
              },
              {
                text: "Sitamarhi",
                link: "https://www.swiggy.com/city/sitamarhi",
              },
              {
                text: "Chakdaha",
                link: "https://www.swiggy.com/city/chakdaha",
              },
              {
                text: "Khalilabad",
                link: "https://www.swiggy.com/city/khalilabad",
              },
              {
                text: "Pattukkottai",
                link: "https://www.swiggy.com/city/pattukkottai",
              },
              {
                text: "Tindivanam",
                link: "https://www.swiggy.com/city/tindivanam",
              },
              {
                text: "Tiruttani",
                link: "https://www.swiggy.com/city/tiruttani",
              },
              {
                text: "Gangarampur",
                link: "https://www.swiggy.com/city/gangarampur",
              },
              {
                text: "Dharapuram",
                link: "https://www.swiggy.com/city/dharapuram",
              },
              {
                text: "Arakkonam",
                link: "https://www.swiggy.com/city/arakkonam",
              },
              {
                text: "Sirkali",
                link: "https://www.swiggy.com/city/sirkali",
              },
              {
                text: "Mettupalayam",
                link: "https://www.swiggy.com/city/mettupalayam",
              },
              {
                text: "Digboi",
                link: "https://www.swiggy.com/city/digboi",
              },
              {
                text: "Biswanath Chariali",
                link: "https://www.swiggy.com/city/biswanath-chariali",
              },
              {
                text: "Nalbari",
                link: "https://www.swiggy.com/city/nalbari",
              },
              {
                text: "Shirdi city",
                link: "https://www.swiggy.com/city/shirdi-city",
              },
              {
                text: "Mukerian",
                link: "https://www.swiggy.com/city/mukerian",
              },
              {
                text: "Hosur",
                link: "https://www.swiggy.com/city/hosur",
              },
              {
                text: "Palakollu",
                link: "https://www.swiggy.com/city/palakollu",
              },
              {
                text: "Ravulapalem",
                link: "https://www.swiggy.com/city/ravulapalem",
              },
              {
                text: "Barh",
                link: "https://www.swiggy.com/city/barh",
              },
              {
                text: "Palghar",
                link: "https://www.swiggy.com/city/palghar",
              },
              {
                text: "Kushalnagar",
                link: "https://www.swiggy.com/city/kushalnagar",
              },
              {
                text: "Dungarpur",
                link: "https://www.swiggy.com/city/dungarpur",
              },
              {
                text: "Chaibasa",
                link: "https://www.swiggy.com/city/chaibasa",
              },
              {
                text: "Haveri",
                link: "https://www.swiggy.com/city/haveri",
              },
              {
                text: "Karaikal",
                link: "https://www.swiggy.com/city/karaikal",
              },
              {
                text: "Jjajjar",
                link: "https://www.swiggy.com/city/jjajjar",
              },
              {
                text: "Kokrajhar",
                link: "https://www.swiggy.com/city/kokrajhar",
              },
              {
                text: "Rangia",
                link: "https://www.swiggy.com/city/rangia",
              },
              {
                text: "Hamirpur",
                link: "https://www.swiggy.com/city/hamirpur",
              },
              {
                text: "Una",
                link: "https://www.swiggy.com/city/una",
              },
              {
                text: "Sulthan Bathery",
                link: "https://www.swiggy.com/city/sulthan-bathery",
              },
              {
                text: "Rayagada",
                link: "https://www.swiggy.com/city/rayagada",
              },
              {
                text: "Paradeep",
                link: "https://www.swiggy.com/city/paradeep",
              },
              {
                text: "Mandapeta",
                link: "https://www.swiggy.com/city/mandapeta",
              },
              {
                text: "Jamui",
                link: "https://www.swiggy.com/city/jamui",
              },
              {
                text: "Pilkhuwa",
                link: "https://www.swiggy.com/city/pilkhuwa",
              },
              {
                text: "Parvathipuram",
                link: "https://www.swiggy.com/city/parvathipuram",
              },
              {
                text: "Ambajogai",
                link: "https://www.swiggy.com/city/ambajogai",
              },
              {
                text: "Araria",
                link: "https://www.swiggy.com/city/araria",
              },
              {
                text: "North Lakhimpur",
                link: "https://www.swiggy.com/city/north-lakhimpur",
              },
              {
                text: "Rajampet",
                link: "https://www.swiggy.com/city/rajampet",
              },
              {
                text: "Udumalaipettai",
                link: "https://www.swiggy.com/city/udumalaipettai",
              },
              {
                text: "Tirupattur",
                link: "https://www.swiggy.com/city/tirupattur",
              },
              {
                text: "Hojai",
                link: "https://www.swiggy.com/city/hojai",
              },
              {
                text: "Khagaria",
                link: "https://www.swiggy.com/city/khagaria",
              },
              {
                text: "Dasuya",
                link: "https://www.swiggy.com/city/dasuya",
              },
              {
                text: "Gudur",
                link: "https://www.swiggy.com/city/gudur",
              },
              {
                text: "Sullurpeta",
                link: "https://www.swiggy.com/city/sullurpeta",
              },
              {
                text: "Piler",
                link: "https://www.swiggy.com/city/piler",
              },
              {
                text: "SankaranKoil",
                link: "https://www.swiggy.com/city/sankarankoil",
              },
              {
                text: "Nabha",
                link: "https://www.swiggy.com/city/nabha",
              },
              {
                text: "LPU - Phagwara",
                link: "https://www.swiggy.com/city/lpu-phagwara",
              },
              {
                text: "Jangipur",
                link: "https://www.swiggy.com/city/jangipur",
              },
              {
                text: "Roha",
                link: "https://www.swiggy.com/city/roha",
              },
            ],
            id: "footer_content",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
            citySlug: "gurgaon",
            lat: "28.4427365",
            lng: "77.0735617",
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            gandalfRequest:
              '{"sortAttribute":"relevance","isFiltered":false,"queryId":"seo-data-3eae6676-3fb3-4671-b45f-68d5bd5980b2","seoParams":{"apiName":"FoodHomePage","brandId":"","seoUrl":"www.swiggy.com","pageType":"FOOD_HOME_PAGE"}}',
            id: "meta_data",
            metaInfo: {
              pageType: "FOOD_HOME_PAGE",
              pageTitle:
                "Order Food Online from India's Best Food Delivery Service | Swiggy",
              pageMetaDescription:
                "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
              pageKeywords:
                "Food delivery, Online food order, Online food dleivery",
            },
            screenType: "filteredCollection",
            seoParams: {
              apiName: "FoodHomePage",
              seoUrl: "www.swiggy.com",
              pageType: "FOOD_HOME_PAGE",
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    cacheExpiryTime: 240,
    nextFetch: 1,
  },
  tid: "1084edf2-5e56-472e-9096-767c1d11df33",
  sid: "fs5ab181-d44f-443f-b7fd-04cebfcfb4d2",
  deviceId: "f32ee35c-54b7-260b-6af7-be228e8a6837",
  csrfToken: "mTpsfMPJvM4C-xk9-aYPd6KM8I6LmnkuRiS4EN64",
};
