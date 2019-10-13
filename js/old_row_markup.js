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
              appMenuSettingsContainerVisible: false
          },
          fx: function(target){
              let val = target;
              let self = this;

              console.log("------------------------------------");
              console.log(`${val}`);
              console.log("------------------------------------");
              switch(val){
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
