
function processChildren(secondary){
    let children = secondary;
  //  console.log("processing children...");
    //console.log(children);
    for(var j=0; j<children.length; j++){
        (function(){
            let currentChild = children[j];

            if(currentChild.name!="multiple"){
                if(currentChild.parent.length==0&&currentChild.children.length==0){ //  objects without any child objects and whose sole parent is the base environment
                    let base = Experience.environment[0];
                    let childElement = currentChild.element();
                    childElement.textContent = currentChild.content();

                    if(currentChild.type=="button-container"){
                        childElement.addEventListener(Experience.effector[0].event, function(){
                            let childSelf = this;
                            Experience.effector[0].fx(childSelf.getAttribute("id"));
                        });
                    }

                    document.getElementById(base.id()).appendChild(childElement);

                }

                if(currentChild.parent.length>0){ //  special cases of the same situation below [see comment in line 564]
                    for(var l = 0; l<currentChild.parent.length; l++){
                        (function(){
                            let parentObject = Experience.objectsubject[currentChild.parent[l]];
                            let childElement = currentChild.element(parentObject.name);
                            let tapin = false;

                            if(currentChild.type=="blurb-container"){
                              childElement.textContent = "";
                              tapin = true;

                            }
                            else if(currentChild.type=="experience-element-container"){
                                console.log(currentChild.id());
                            }
                            else if(currentChild.type=="instructions-container"){ //DRAFT: make a function that adds specific builders for particular types defined by the user or a developer
                                childElement.innerHTML = currentChild.content(parentObject.name);
                            }
                            else{
                              childElement.textContent = currentChild.content(parentObject.name);
                                //console.log(childElement);

                            }

                            //console.log(`#${currentChild.id(parentObject.name)}`);
                            if(currentChild.type=="button-container"){
                                childElement.addEventListener(Experience.effector[0].event, function(){
                                    let childSelf = this;
                                    Experience.effector[0].fx(childSelf.getAttribute("id"));
                                });
                            }

                            document.getElementById(parentObject.id()).appendChild(childElement);
                            if(currentChild.name=="rocket-body"){
                                var groupObject3D = document.querySelector('a-entity').object3D;
                                console.log(groupObject3D.parent);
                                console.log(groupObject3D.children);
                              //document.querySelector(`#${currentChild.id()}`).setAttribute("id", currentChild.id());
                               //document.querySelector(`#${currentChild.id()}`).setAttribute("obj-model", "obj: #rocket-obj; mtl: #rocket-mtl");
                               //document.querySelector(`#${currentChild.id()}`).object3D.scale.set(0.1, 0.1, 0.1);
                              //document.querySelector(`#${currentChild.id()}`).object3D.position.set(currentChild.posX, currentChild.posY, currentChild.posZ);
                            }
                            if(tapin){
                                document.getElementById(currentChild.id()).innerHTML = currentChild.content();
                            }
                        })();
                    }
                }

            }
            else{ // if the object has multiple parents, i.e. it is a resource or characterisatic shared by other objects
                let parents = currentChild.parent;
                for(var k = 0; k<parents.length; k++){
                    (function(){
                        let parentObject = Experience.objectsubject[parents[k]];
                        let childElement = currentChild.element(parentObject.name);
                        let childContentBody = currentChild.content(parentObject.name);
                        if(typeof(childContentBody)=="str"){
                            childElement.textContent = currentChild.content(parentObject.name);
                        }
                        else{
                      //      console.log("domelement");
                            childElement.textContent = currentChild.content(parentObject.name);
                        }
                      //  console.log(`#${currentChild.id(parentObject.name)}`);
                        if(currentChild.type=="button-container"){
                            childElement.addEventListener(Experience.effector[0].event, function(){
                                let childSelf = this;
                                Experience.effector[0].fx(childSelf.getAttribute("id"));
                            });
                        }

                        document.getElementById(parentObject.id()).appendChild(childElement);

                    })();
                }


            }
        })();
    }
    //toggleMenuVisibility();
    //switchToPage(pageInFocus);
}
