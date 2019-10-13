var Experience = {
    environment: [
        {
            name: "old-row-maryland",
            id: function(){
                return "main-app-container";
            },
            type: "hyperreal-space",
            class: "environment-container",
            settings: "all",
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                return el;
            }
        }
    ],
    objectsubject: [
      {
            name: "header",
            type: "container",
            class: "banner-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 0,
            children: [

            ],
            parent: [],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
      {
            name: "world-stream",
            type: "container",
            class: "stream-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 1,
            children: [
              6,
              7,
              8,
              9,
              10
            ],
            parent: [],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
      },
      {
          name: "app-menu",
          type: "button-container",
          class: "button-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 2,
          children: [
          ],
          parent: [],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              return el;
          }
        },
      {
            name: "app-menu",
            type: "container",
            class: "settings-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 3,
            children: [
              11,
              12,
              13
            ],
            parent: [],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
          },
      {
            name: "login-page",
            type: "container",
              class: "overlay-container",
              id: function(){
                  let self = this;
                  return ""+self.name+"-"+self.class;
              },
              content: function(){
                  return "";
              },
              index: 4,
              children: [
              ],
              parent: [],
              element: function(){
                  let self = this;
                  let el = document.createElement("div");
                  el.setAttribute("id", self.id());
                  el.classList.add(self.class);
                  return el;
              }
            },
      {
        name: "app-selection-page",
        type: "container",
        class: "overlay-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "";
        },
        index: 5,
        children: [
        ],
        parent: [],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "augr",
        type: "container",
        class: "preview-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "AugR";
        },
        index: 6,
        children: [
        ],
        parent: [
          1
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            el.classList.add("top-bins");
            return el;
        }
      },
      {
        name: "shoppAIR",
        type: "container",
        class: "preview-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "shoppAIR";
        },
        index: 7,
        children: [
        ],
        parent: [
          1
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            el.classList.add("top-bins");
            return el;
        }
      },
      {
        name: "snackshack",
        type: "container",
        class: "preview-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "snack shack";
        },
        index: 8,
        children: [
        ],
        parent: [
          1
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "lyoko",
        type: "container",
        class: "preview-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "lyoko";
        },
        index: 9,
        children: [
        ],
        parent: [
          1
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "solAR",
        type: "container",
        class: "preview-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "solAR";
        },
        index: 10,
        children: [
        ],
        parent: [
          1
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "sort-by-publishing-date",
        type: "menu-button-container",
        class: "menu-button-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "Published";
        },
        index: 11,
        children: [
        ],
        parent: [
          3
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "sort-by-downloads",
        type: "button-container",
        class: "menu-button-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "Downloads";
        },
        index: 12,
        children: [
        ],
        parent: [
          3
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "add-item",
        type: "button-container",
        class: "menu-button-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "Add";
        },
        index: 13,
        children: [
        ],
        parent: [
          3
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "login-header",
        type: "container",
        class: "form-component-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "test";
        },
        index: 14,
        children: [
        ],
        parent: [
          4
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "login-instructions",
        type: "container",
        class: "form-component-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "instructions will go here";
        },
        index: 15,
        children: [
        ],
        parent: [
          4
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "submit-login-credentials",
        type: "button-container",
        class: "form-component-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "test";
        },
        index: 16,
        children: [
        ],
        parent: [
          4
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "exit-login-form",
        type: "button-container",
        class: "form-component-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "exit";
        },
        index: 17,
        children: [
        ],
        parent: [
          4
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      /*{
              name: "card",
              type: "container",
              class: "page-container",
              id: function(){
                  let self = this;
                  return ""+self.name+"-"+self.class;
              },
              content: function(){
                  return "";
              },
              index: 0,
              children: [
                  3,  // preview-video-container
                  4,  // header-title-container
                  5,  // header-subtitle-container
                  9, // purchase-button-container
              ],
              parent: [],
              element: function(){
                  let self = this;
                  let el = document.createElement("div");
                  el.setAttribute("id", self.id());
                  el.classList.add(self.class);
                  return el;
                }
              },*/
    ],
    subjectobject: [],
    effector: [
      {
          view: "flat",
          event: "click",
          accessibility: {
              isMobile: function(){
                  if(window.innerWidth>640){
                      return false;
                  }
                  else{
                      return true;
                  }
              },
              appMenuSettingsContainerVisible: false,
              loginPageOverlayContainerVisible: false
          },
          fx: function(target){
              let val = target;
              let self = this;

              console.log("------------------------------------");
              console.log(`${val}`);
              console.log("------------------------------------");
              switch(val){
                  case "exit-login-form-form-component-container":  /* SAME CODE AS ~~111~~~ below */
                      setTimeout(function(){
                        document.getElementById("login-page-overlay-container").style.display = "none";
                      }, 500);
                      document.getElementById("login-page-overlay-container").style.opacity = "0";
                      document.getElementById("login-page-overlay-container").style.height = "0";
                      self.loginPageOverlayContainerVisible = false;
                  break;
                  case "add-item-menu-button-container":
                      if(self.loginPageOverlayContainerVisible){  /* ~~~111~~~ */
                        setTimeout(function(){
                          document.getElementById("login-page-overlay-container").style.display = "none";
                        }, 500);
                        document.getElementById("login-page-overlay-container").style.opacity = "0";
                        document.getElementById("login-page-overlay-container").style.height = "0";
                        self.loginPageOverlayContainerVisible = false;
                      }
                      else{
                        document.getElementById("login-page-overlay-container").style.display = "block";
                        setTimeout(function(){
                          document.getElementById("login-page-overlay-container").style.opacity = "1.0";
                          document.getElementById("login-page-overlay-container").style.height = "100%";

                          self.loginPageOverlayContainerVisible = true;
                        }, 50);
                      }
                  break;
                  case "app-menu-button-container":
                      console.log("toggle menu settings container");
                      if(self.appMenuSettingsContainerVisible){
                          setTimeout(function(){
                            document.getElementById("app-menu-settings-container").style.display = "none";
                          }, 500);
                          document.getElementById("app-menu-settings-container").style.opacity = "0";
                          document.getElementById("app-menu-settings-container").style.height = "0";
                          self.appMenuSettingsContainerVisible = false;
                      }
                      else{
                          document.getElementById("app-menu-settings-container").style.display = "block";
                          setTimeout(function(){
                            document.getElementById("app-menu-settings-container").style.opacity = "1.0";
                            if(self.accessibility.isMobile()){
                                document.getElementById("app-menu-settings-container").style.height = "50%";
                            }
                            else{
                                document.getElementById("app-menu-settings-container").style.height = "300px";
                            }
                            self.appMenuSettingsContainerVisible = true;
                          }, 50);

                      }
                  break;
                  default:
                      console.log("no specific functionality defined for this target.");
                  break;
              }
              console.log("------------------------------------");
          }
      }
    ],
    selector: []
};
