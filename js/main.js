jQuery(document).ready(function() {

    init_local_storage();

    let mode = null;
    let choosedBackSkin = null;
    let choosedCamSkin = null;

    let allMaterials = document.querySelectorAll('.material-card > img');
    let backSkinImage = document.querySelector('.back-image');
    let camSkinImage = document.querySelector('.cam-image');
    let allMaterialCards = document.querySelectorAll('.material-card');
    let removeMaterials = document.querySelector('.et-delete-material');
    let backButton = document.querySelector('.et-back-button');
    let mainPopupWindow = document.querySelector('.et-main-popup-window');
    let chooseCamSkinButton = document.querySelector('.et-card-camera-skin');
    let chooseBackSkinButton = document.querySelector('.et-card-back-skin');
    let addSkinButton = document.querySelector('.et-add-skin-button');
    let addSkinCards = document.querySelectorAll(".clicable-et-card");
    let backSkinCard = document.querySelector("#et-back-skin");
    let camSkinCard = document.querySelector("#et-cam-skin");


    function init_local_storage(){
      window.localStorage.removeItem('back_skin');
      window.localStorage.removeItem('cam_skin');

      if(!window.localStorage.getItem('cart_meta')){
        window.localStorage.setItem("cart_meta", JSON.stringify([]));
      }
    }

    function update_local_storage(backskin, camskin){
      window.localStorage.setItem('back_skin', backskin);
      window.localStorage.setItem('cam_skin', camskin);
    }

    //Add mode depending on what did the user choose, back or cam skin.
    for (let p = 0; p < addSkinCards.length; p++) {
        addSkinCards[p].addEventListener("click", e => {

            //Remove all selected materials initially
            remove_all_selected_material_cards(allMaterialCards);

            if (e.target.parentNode == backSkinCard) {
                mode = 'back_skin';
                mainPopupWindow.classList.remove('et-close-popup-window');
                add_selected_material(allMaterialCards, choosedBackSkin);
            } else if (e.target.parentNode == camSkinCard) {
                mode = 'cam_skin';
                mainPopupWindow.classList.remove('et-close-popup-window');
                add_selected_material(allMaterialCards, choosedCamSkin);
            }
        });
    }

    for (let i = 0; i < allMaterials.length; i++) {
        allMaterials[i].addEventListener('click', e => {

            let parent_card = e.target.parentElement;
            let material = parent_card.id.replace('-', '_');


            if (mode == 'back_skin' && material == choosedBackSkin) {
                remove_all_selected_material_cards(allMaterialCards);
                choosedBackSkin = null;
                backSkinImage.href.baseVal = "";

            } else if (mode == 'cam_skin' && material == choosedCamSkin) {
                remove_all_selected_material_cards(allMaterialCards);
                choosedCamSkin = null;
                camSkinImage.href.baseVal = "";
            } else {
                remove_all_selected_material_cards(allMaterialCards);

                switch (material) {
                    case "carbon_red":
                        if (mode == 'back_skin') {
                            backSkinImage.href.baseVal = galaxyS21.carbonRedBack;
                            choosedBackSkin = 'carbon_red';
                        } else if (mode == 'cam_skin') {
                            camSkinImage.href.baseVal = galaxyS21.carbonRedCam;
                            choosedCamSkin = 'carbon_red';
                        }
                        break;
                    case "carbon_black":
                        if (mode == 'back_skin') {
                            backSkinImage.href.baseVal = galaxyS21.carbonBlackBack;
                            choosedBackSkin = 'carbon_black';
                        } else if (mode == 'cam_skin') {
                            camSkinImage.href.baseVal = galaxyS21.carbonBlackCam;
                            choosedCamSkin = 'carbon_black';
                        }
                        break;
                    case "carbon_gray":
                        if (mode == 'back_skin') {
                            backSkinImage.href.baseVal = galaxyS21.carbonGrayBack;
                            choosedBackSkin = 'carbon_gray';
                        } else if (mode == 'cam_skin') {
                            camSkinImage.href.baseVal = galaxyS21.carbonGrayCam;
                            choosedCamSkin = 'carbon_gray';
                        }
                        break;
                    case "carbon_yellow":
                        if (mode == 'back_skin') {
                            backSkinImage.href.baseVal = galaxyS21.carbonYellowBack;
                            choosedBackSkin = 'carbon_yellow';
                        } else if (mode == 'cam_skin') {
                            camSkinImage.href.baseVal = galaxyS21.yellowCarbonCam;
                            choosedCamSkin = 'carbon_yellow';
                        }
                        break;
                    case "carbon_white":
                        if (mode == 'back_skin') {
                            backSkinImage.href.baseVal = galaxyS21.carbonWhiteBack;
                            choosedBackSkin = 'carbon_white';
                        } else if (mode == 'cam_skin') {
                            camSkinImage.href.baseVal = galaxyS21.whiteCarbonCam;
                            choosedCamSkin = 'carbon_white';
                        }
                        break;
                    case "leopard":
                        if (mode == 'back_skin') {
                            backSkinImage.href.baseVal = galaxyS21.leopardBack;
                            choosedBackSkin = 'leopard';
                        } else if (mode == 'cam_skin') {
                            camSkinImage.href.baseVal = galaxyS21.leopardCam;
                            choosedCamSkin = 'leopard';
                        }
                        break;
                    case "blue_camo":
                        if (mode == 'back_skin') {
                            backSkinImage.href.baseVal = galaxyS21.blueCamoBack;
                            choosedBackSkin = 'blue_camo';
                        } else if (mode == 'cam_skin') {
                            camSkinImage.href.baseVal = galaxyS21.leopardCam;
                            choosedCamSkin = 'leopard';
                        }
                       break;
                    case "three_d_cube_back":
                        if (mode == 'back_skin') {
                            backSkinImage.href.baseVal = galaxyS21.threeDCubeBack;
                            choosedBackSkin = 'three_d_cube_back';
                        } else if (mode == 'cam_skin') {
                            camSkinImage.href.baseVal = galaxyS21.leopardCam;
                            choosedCamSkin = 'leopard';
                        }
                      break;
                    case "wood_back":
                        if (mode == 'back_skin') {
                            backSkinImage.href.baseVal = galaxyS21.woodBack;
                            choosedBackSkin = 'wood_back';
                         } else if (mode == 'cam_skin') {
                            camSkinImage.href.baseVal = galaxyS21.leopardCam;
                            choosedCamSkin = 'leopard';
                        }
                        break;
                    case "supreme_back":
                        if (mode == 'back_skin') {
                            backSkinImage.href.baseVal = galaxyS21.supremeBack;
                            choosedBackSkin = 'supreme_back';
                          } else if (mode == 'cam_skin') {
                            camSkinImage.href.baseVal = galaxyS21.leopardCam;
                            choosedCamSkin = 'leopard';
                          }
                        break;
                    case "summer_back":
                         if (mode == 'back_skin') {
                            backSkinImage.href.baseVal = galaxyS21.summerBack;
                            choosedBackSkin = 'summer_back';
                         } else if (mode == 'cam_skin') {
                            camSkinImage.href.baseVal = galaxyS21.leopardCam;
                            choosedCamSkin = 'leopard';
                         }
                        break;
          					case "snakeBack":
                                   if (mode == 'back_skin') {
                                      backSkinImage.href.baseVal = galaxyS21.snakeBack;
                                      choosedBackSkin = 'snakeBack';
                                   } else if (mode == 'cam_skin') {
                                      camSkinImage.href.baseVal = galaxyS21.leopardCam;
                                      choosedCamSkin = 'leopard';
                                   }
                                  break;
          					case "nikeBack":
                                  if (mode == 'back_skin') {
                                      backSkinImage.href.baseVal = galaxyS21.nikeBack;
                                      choosedBackSkin = 'nikeBack';
                                    } else if (mode == 'cam_skin') {
                                      camSkinImage.href.baseVal = galaxyS21.leopardCam;
                                      choosedCamSkin = 'leopard';
                                    }
                                  break;
                    case "louis_vuitton_back":
                                  if (mode == 'back_skin') {
                                      backSkinImage.href.baseVal = galaxyS21.louisVuittonBack;
                                      choosedBackSkin = 'louis_vuitton_back';
                                   } else if (mode == 'cam_skin') {
                                      camSkinImage.href.baseVal = galaxyS21.leopardCam;
                                      choosedCamSkin = 'leopard';
                                   }
                                  break;
          					case "ligh_pink_back":
                                   if (mode == 'back_skin') {
                                      backSkinImage.href.baseVal = galaxyS21.lighPinkBack;
                                      choosedBackSkin = 'ligh_pink_back';
                                   } else if (mode == 'cam_skin') {
                                      camSkinImage.href.baseVal = galaxyS21.leopardCam;
                                      choosedCamSkin = 'leopard';
                                   }
                                  break;
          					case "ligh_pink_v2_back":
                                   if (mode == 'back_skin') {
                                      backSkinImage.href.baseVal = galaxyS21.lighPinkV2Back;
                                      choosedBackSkin = 'ligh_pink_v2_back';
                                   } else if (mode == 'cam_skin') {
                                      camSkinImage.href.baseVal = galaxyS21.leopardCam;
                                      choosedCamSkin = 'leopard';
                                   }
                                  break;
          					case "honey_comb_back":
                                  if (mode == 'back_skin') {
                                      backSkinImage.href.baseVal = galaxyS21.honeyCombBack;
                                      choosedBackSkin = 'honey_comb_back';
                                    } else if (mode == 'cam_skin') {
                                      camSkinImage.href.baseVal = galaxyS21.leopardCam;
                                      choosedCamSkin = 'leopard';
                                    }
                                  break;
                              case "honey_comb_v2":
                                   if (mode == 'back_skin') {
                                      backSkinImage.href.baseVal = galaxyS21.honeyCombv2;
                                      choosedBackSkin = 'honey_comb_v2';
                                   } else if (mode == 'cam_skin') {
                                      camSkinImage.href.baseVal = galaxyS21.leopardCam;
                                      choosedCamSkin = 'leopard';
                                   }
                                  break;
          					case "hexagon_back":
                                   if (mode == 'back_skin') {
                                      backSkinImage.href.baseVal = galaxyS21.hexagonBack;
                                      choosedBackSkin = 'hexagon_back';
                                   } else if (mode == 'cam_skin') {
                                      camSkinImage.href.baseVal = galaxyS21.leopardCam;
                                      choosedCamSkin = 'leopard';
                                   }
                                  break;
          					case "blue_marbel_back":
                                  if (mode == 'back_skin') {
                                      backSkinImage.href.baseVal = galaxyS21.blueMarbelBack;
                                      choosedBackSkin = 'blue_marbel_back';
                                    } else if (mode == 'cam_skin') {
                                      camSkinImage.href.baseVal = galaxyS21.leopardCam;
                                      choosedCamSkin = 'leopard';
                                    }
                                  break;
          					case "art_back":
                                   if (mode == 'back_skin') {
                                      backSkinImage.href.baseVal = galaxyS21.artBack;
                                      choosedBackSkin = 'art_back';
                                   } else if (mode == 'cam_skin') {
                                      camSkinImage.href.baseVal = galaxyS21.leopardCam;
                                      choosedCamSkin = 'leopard';
                                   }
                                  break;
                }
                if (mode == 'back_skin') {
                    add_selected_material(allMaterialCards, choosedBackSkin, parent_card);
                } else if (mode == 'cam_skin') {
                    add_selected_material(allMaterialCards, choosedCamSkin, parent_card);
                }
            }

            update_local_storage(choosedBackSkin, choosedCamSkin);
        });
    }

    backButton.addEventListener('click', e => {
        apply_skin_and_close();
    });

    addSkinButton.addEventListener('click', e => {
        apply_skin_and_close();
    });

    removeMaterials.addEventListener('click', e => {
        delete_current_selection();
        update_local_storage(choosedBackSkin, choosedCamSkin);
    });

    function apply_skin_and_close() {

        let addButtonClone = `DODAJ`;

        let chooseBackSkinButtonRibbon = backSkinCard.querySelector('.et-add-ribbon');
        let chooseCamSkinButtonRibbon = camSkinCard.querySelector('.et-add-ribbon');

        if (mode == 'back_skin' && choosedBackSkin) {
            chooseBackSkinButton.classList.add('et-choosed');
            chooseBackSkinButtonRibbon.innerHTML = '<span>&#10003;</span>';
        } else if (mode == 'cam_skin' && choosedCamSkin) {
            chooseCamSkinButton.classList.add('et-choosed');
            chooseCamSkinButtonRibbon.innerHTML = '<span>&#10003;</span>';
        } else if (mode == 'back_skin' && !choosedBackSkin) {
            chooseBackSkinButtonRibbon.innerHTML = addButtonClone;
            chooseBackSkinButton.classList.remove('et-choosed');
        } else if (mode == 'cam_skin' && !choosedCamSkin) {
            chooseCamSkinButtonRibbon.innerHTML = addButtonClone;
            chooseCamSkinButton.classList.remove('et-choosed');
        }

        mainPopupWindow.classList.add('et-close-popup-window');
    }

    function remove_all_selected_material_cards(elems) {
        for (let l = 0; l < elems.length; l++) {
            elems[l].classList.remove('et-card-selected');
        }
    }

    function add_selected_material(elems, choosedSkin) {
        for (let l = 0; l < elems.length; l++) {
            choosedElem = elems[l];
            if (choosedElem.id.replace('-', '_') == choosedSkin) {
                choosedElem.classList.add('et-card-selected');
            }
        }
    }

    function delete_current_selection() {
        if (mode == 'back_skin') {
            choosedBackSkin = null;
            backSkinImage.href.baseVal = "";
        } else if (mode == 'cam_skin') {
            choosedCamSkin = null;
            camSkinImage.href.baseVal = "";
        }
    }

});
