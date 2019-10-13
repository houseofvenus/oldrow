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
          fx: function(target){
              let val = target;

              console.log("------------------------------------");
              console.log(`${val}`);
              console.log("------------------------------------");
              switch(val){
                  case "preview-launcher":
                      playPreviewOfProductInFocus();
                      break;
                  case "site-menu-button":
                      toggleMenuVisibility();
                      break;
                  case "site-menu-site-menu-item-0":
                      toggleSiteSubMenuVisibility();
                      break;
                  case "site-menu-site-menu-item-1":
                      openDemonstrationsGallery();
                      break;
                  case "card-purchase-button-container":
                      openCheckout('card');
                      break;
                  case "aria-purchase-button-container":
                      openCheckout('aria');
                      break;
                  case "site-menu-site-menu-item-2":
                      openParkMap();
                      break;
                  case "page-indicator-row-page-indicator-bubble-0":
                      switchToPage(0);
                      break;
                  case "page-indicator-row-page-indicator-bubble-1":
                      switchToPage(1);
                      break;
                  case "page-indicator-row-page-indicator-bubble-2":
                      switchToPage(2);
                      break;
                  case "preview-closer":
                      closePreviewOfProductInFocus();
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
