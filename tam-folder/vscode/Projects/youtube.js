



/////////////////////////////////////////////////////////////////

let isChange = true;
var tooltip = document.getElementsByClassName("js-settings")[0];

tooltip.addEventListener("click", function () {
    document.getElementsByClassName("header-third-tooltip")[0].classList.toggle("active");

    document.getElementsByClassName("theme")[0].style.display = document.getElementsByClassName("theme")[0].style.display === "none" ? "" : "none"
});

var mode = document.getElementsByClassName("mode")[0];
    mode.addEventListener("click", function() {
    document.getElementsByClassName("header-third-tooltip")[0].style.display = document.getElementsByClassName("header-third-tooltip")[0].style.display === "block" ? "" : "none" ;

    document.getElementsByClassName("theme")[0].style.display = document.getElementsByClassName("theme")[0].style.display === "none" ? "flex" : "";
    
});

var back = document.getElementsByClassName("back")[0];
back.addEventListener("click", function() {

    document.getElementsByClassName("header-third-tooltip")[0].style.display = document.getElementsByClassName("header-third-tooltip")[0].style.display === "none" ? "" : "block" ;

    document.getElementsByClassName("theme")[0].style.display = document.getElementsByClassName("theme")[0].style.display === "block" ? "" : "none";    
})
//////////////////////////////////////////////////////
var sideBar = document.getElementsByClassName("js-sidebar")[0];
sideBar.addEventListener("click", function() {

    document.getElementsByTagName("aside")[0].style.width = document.getElementsByTagName("aside")[0].style.width ? "" : "76px";

    document.getElementsByClassName("article-header")[0].style.left = document.getElementsByClassName("article-header")[0].style.left ? "" : "3.5%";

    document.getElementsByClassName("article-content")[0].style.left = document.getElementsByClassName("article-content")[0].style.left ? "" : "3.5%";

    document.querySelectorAll(".js-a").forEach(event => {
        event.style.flexDirection = event.style.flexDirection ? "" : "column";
        event.style.paddingBottom = event.style.paddingBottom ? "" : "15px";
    });
    document.querySelectorAll(".js-column").forEach(event => {
        event.style.display = event.style.display ? "" : "none";
    });
    document.querySelectorAll(".js-hr").forEach(event => {
        event.style.display = event.style.display ? "" : "none";
    });
    document.querySelectorAll(".column").forEach(event => {
        event.style.paddingInline = event.style.paddingInline ? "" : "0";
        event.style.paddingBlock = event.style.paddingBlock ? "" : "0";
    });
    document.querySelectorAll(".js-a > span").forEach(event => {
        event.style.paddingLeft = event.style.paddingLeft ? "" : "0";
        event.style.fontSize = event.style.fontSize ? "" : "0.7rem";
    });
  

    
    document.querySelectorAll(".none").forEach(event => {
        event.style.display = event.style.display ?  "" : "block"
    })

});



/////////////////////////////////////////////////

var darkTheme = document.getElementsByClassName("dark-theme")[0];
var lightTheme = document.getElementsByClassName("light-theme")[0];


lightTheme.addEventListener("click", function() {
    
    document.querySelectorAll(".column a:not(.home)").forEach(link => {
       link.addEventListener("mouseover", function() {
        this.style.backgroundColor = "var(--color-white)"
       });
       link.addEventListener("mouseout", function() {
        this.style.backgroundColor = "transparent"
       });
    });
    
    document.querySelector("header .header-first a:first-child").addEventListener("mouseover", function() {
        this.style.backgroundColor = "var(--color-white)"
    })
    document.querySelector("header .header-first a:first-child").addEventListener("mouseout", function() {
        this.style.backgroundColor = "transparent"
    })

    localStorage.setItem("whiteBackgroundColor", "white");
    document.querySelectorAll("aside, header, body, .article-content, .article-header").forEach(event => {
        event.style.backgroundColor = localStorage.getItem("whiteBackgroundColor")
    }); 
    
    document.querySelector(".column .home").style.backgroundColor = "var(--color-white)"

    localStorage.setItem("whiteColor", "white");
    document.querySelectorAll(".article-header-links > a:first-child").forEach(event => {
        event.style.color = localStorage.getItem("whiteColor")
    });



    localStorage.setItem("varBackgroundColor", "var(--color-white)");
    document.querySelectorAll(".article-header > .article-header-links > a:not(:first-child)").forEach(event => {
        event.style.backgroundColor = localStorage.getItem("varBackgroundColor");
    });


    localStorage.setItem("blackColor", "black");
    sideBar.style.color = localStorage.getItem("blackColor");
    var color = localStorage.getItem("blackColor");
    var style = document.createElement('style');
    style.innerHTML = `
        
        .column > a > i, 
        .column > a > span, 
        .js-settings > i, 
        .article-shorts .article-shorts-main .shorts .information > p,
        .article-shorts .article-shorts-main .shorts .information > span,
        header .header-first a:last-child::before,
        .article-content .article-shorts .article-shorts-title span {
            color: ${color};
        }
    `;
    document.head.appendChild(style);
    
    
    localStorage.setItem("blackBackgroundColor", "black");
    document.querySelectorAll(".article-header .article-header-links > a:first-child").forEach(event => {
        event.style.backgroundColor = localStorage.getItem("blackBackgroundColor")
    });
    


    localStorage.setItem("blackFill", "black");
    document.querySelector(".header-first a > svg").style.fill = localStorage.getItem("blackFill");



    localStorage.setItem("blueColor", "blue");
    document.querySelectorAll(".header-third > a:nth-child(2), .header-third > a:nth-child(2) > i, .column-sign .sign > i, .column-sign .sign > span").forEach(event => {
        event.style.color = localStorage.getItem("blueColor")
    });

    // có nhiều thẻ con giống nhau, nêu ta không muốn thẻ con nào đó thay đổi thì ta thêm class hoặc làm theo cách này.
    localStorage.setItem("dimGrayColor", "dimgray");
    document.querySelectorAll(".video .information > a, .video .information > span").forEach((event) => {
        if (!event.matches("span:nth-of-type(2)")) {
            event.style.color = localStorage.getItem("dimGrayColor");
        }
        // if (!event.classList.contains("live-stream")) {
        //     event.style.color = localStorage.getItem("dimGrayColor");
        // }

         //  giả sử có nhiều thẻ cha, nhưng ta không muốn thẻ thứ 2 thay đổi thì ta dùng cách này.
        // document.querySelectorAll(".video .information > a, .video .information > span").forEach((event, index) => {
        //     if (index !== 2) {
        //         event.style.color = localStorage.getItem("dimGrayColor");
        //     }
        // });
    });

   localStorage.setItem("blackColor", "#0f0f0f");
   document.querySelectorAll(".article-header > .article-header-links > a:not(:first-child), .article-content .article-content-main .video .personal .information > p, .column > p, .column-sign > p, .article-shorts .article-shorts-main .shorts .information > p").forEach(event => {
    event.style.color = localStorage.getItem("blackColor")
})



    // window.location.href = "http://127.0.0.1:5500/Projects/Youtube.html#nothing"; 
});


window.addEventListener("DOMContentLoaded", function() {

    

    document.querySelectorAll(".column-sign .sign, .header-third .sign").forEach(function(event) {
        event.style.border =  "0.5px solid rgba(0, 0, 0, 0.15)";
    });
    
    // document.querySelectorAll("header .header-first a:first-child").forEach(function(event) {
    //     event.addEventListener("mouseover", function() {
    //         this.style.backgroundColor = "var(--color-white)";
    //     });
    //     event.addEventListener("mouseout", function() {
    //         this.style.backgroundColor = "transparent";
    //     })
    // });


    document.querySelectorAll(".column-sign .sign, .header-third .sign").forEach(function(event) {
        event.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#def1ff";
            this.style.border = "0.5px solid #def1ff"
        });
        event.addEventListener("mouseout", function() {
            this.style.backgroundColor = "transparent";
            this.style.border = "0.5px solid #def1ff"
        })
    });



    if (localStorage.getItem("blackBackgroundColor")) {
        document.querySelectorAll(".article-header-links > a").forEach(event => {
            event.style.backgroundColor = localStorage.getItem("blackBackgroundColor")
        });
    };

    if (localStorage.getItem("whiteColor")) {
        document.querySelectorAll(".article-header-links > a:first-child").forEach(event => {
            event.style.color = localStorage.getItem("whiteColor")
        })
    };

    if (localStorage.getItem("dimGrayColor")) {
        document.querySelectorAll(".video .information > a, .video .information > span").forEach((event) => {
            if (!event.matches("span:nth-of-type(2)")) {
                event.style.color = localStorage.getItem("dimGrayColor");
            }
        });
    };
    if (localStorage.getItem("whiteBackgroundColor")) {
        document.querySelectorAll("aside, header, body, .article-content, .article-header").forEach(event => {
            event.style.backgroundColor = localStorage.getItem("whiteBackgroundColor")
        }); 
    };

    if (this.localStorage.getItem("blackColor")) {
        document.querySelectorAll(".article-header > .article-header-links > a:not(:first-child), .article-content .article-content-main .video .personal .information > p, .column > p, .column-sign > p, .article-shorts .article-shorts-main .shorts .information > p,").forEach(event => {
            event.style.color = localStorage.getItem("blackColor")
        })
    };

    // Cách khác để thay đổi màu sắc khi tải trang.
    if (localStorage.getItem("blackColor")) {
        sideBar.style.color = localStorage.getItem("blackColor")
        var color = localStorage.getItem("blackColor");
        var style = document.createElement('style');
        style.innerHTML = `
        .column > a > i, 
        .column > a > span, 
        .js-settings > i, 
        .article-shorts .article-shorts-main .shorts .information > span,
        header .header-first a:last-child::before,
        .article-content .article-shorts .article-shorts-title span {
            color: ${color};
        }
        `;
        document.head.appendChild(style);
};
    

    if (localStorage.getItem("varBackgroundColor")) {
        document.querySelectorAll(".article-header > .article-header-links > a:not(:first-child), .column .home").forEach(event => {
            event.style.backgroundColor = localStorage.getItem("varBackgroundColor");
        });
    };

    if (localStorage.getItem("blackFill")) {
        document.querySelector(".header-first a > svg").style.fill = localStorage.getItem("blackFill")
    };
    if (localStorage.getItem("blueColor")) {
        document.querySelectorAll(".header-third > a:nth-child(2), .header-third > a:nth-child(2) > i, .column-sign .sign > i, .column-sign .sign > span").forEach(event => {
            event.style.color = localStorage.getItem("blueColor")
        });
    
    }
});

/////////////////////// NGOÀI LỀ ////////
// localStorage.setItem("dimGrayColor", "dimgray");
// document.querySelectorAll(".video .information > a, .video .information > span").forEach((event, index) => {
//     if (event.tagName.toLowerCase() === 'span' && index === 1) {
//         event.classList.add("live-stream");
//         event.style.color = localStorage.getItem("dimGrayColor");
//     }


//////////////////////////////



darkTheme.addEventListener("click", function() {
   
    localStorage.setItem("blackBackgroundColor", "#0f0f0f");
    document.querySelectorAll("body, aside, header, .article-content, .article-header").forEach(event => {
        event.style.backgroundColor = localStorage.getItem("blackBackgroundColor");
    });

    localStorage.setItem("whiteBackgroundColor", "white");
    document.querySelectorAll(".article-header .article-header-links > a:first-child").forEach(event => {
        event.style.backgroundColor = localStorage.getItem("whiteBackgroundColor")
    });

    localStorage.setItem("blackColor", "#0f0f0f");
    document.querySelectorAll(".article-header .article-header-links > a:first-child").forEach(event => {
        event.style.color = localStorage.getItem("blackColor")
    });


    localStorage.setItem("rgbBackgroundColor", "#272727");
    document.querySelectorAll(".article-header > .article-header-links > a:not(:first-child)").forEach(event => {
        event.style.backgroundColor = localStorage.getItem("rgbBackgroundColor")
    });


    localStorage.setItem("whiteColor", "var(--color-white)");
    document.querySelectorAll(".article-header .article-header-links a:not(:first-child), .column > p, .column-sign > p, .information p,").forEach(event => {
        event.style.color = localStorage.getItem("whiteColor")
    });

    localStorage.setItem("aaaColor", "#aaa");
    document.querySelectorAll(".video .information > a, .video .information > span").forEach((event) => {
        if (!event.matches("span:nth-of-type(2)")) {
            event.style.color = localStorage.getItem("aaaColor");
        }
    });
    
    


    // window.location.href = "http://127.0.0.1:5500/Projects/Youtube.html#nothing";
});

window.addEventListener("DOMContentLoaded", function() {
    

    document.querySelectorAll(".column-sign .sign, .header-third .sign").forEach(function(event) {
        event.style.border =  "0.5px solid gray";
    });

    document.querySelectorAll(".column-sign .sign, .header-third .sign").forEach(function(event) {
        event.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#def1ff";
            this.style.border = "0.5px solid #def1ff"
        });
        event.addEventListener("mouseout", function() {
            this.style.backgroundColor = "transparent";
            this.style.border = "0.5px solid gray"
        })
    });

    

    if (localStorage.getItem("aaaColor")) {
        document.querySelectorAll(".video .information > a, .video .information > span").forEach((event) => {
            if (!event.matches("span:nth-of-type(2)")) {
                event.style.color = localStorage.getItem("aaaColor");
            }
        });
    };

    if (localStorage.getItem("whiteColor")) {
        document.querySelectorAll(".article-header .article-header-links a:not(:first-child), .column > p, .column-sign > p, .information p").forEach(event => {
            event.style.color = localStorage.getItem("whiteColor")
        });
    };

    if (localStorage.getItem("blackBackgroundColor")) {
        document.querySelectorAll("body, aside, header, .article-content, .article-header").forEach(event => {
            event.style.backgroundColor = localStorage.getItem("blackBackgroundColor");
        })
    };

    if (this.localStorage.getItem("whiteBackgroundColor")) {
        document.querySelectorAll(".article-header .article-header-links > a:first-child").forEach(event => {
            event.style.backgroundColor = localStorage.getItem("whiteBackgroundColor")
        });
    };

    if (localStorage.getItem("blackColor")) {
        document.querySelectorAll(".article-header .article-header-links > a:first-child").forEach(event => {
            event.style.color = localStorage.getItem("blackColor")
        });
    };

   

    if (localStorage.getItem("rgbBackgroundColor")) {
        document.querySelectorAll(".article-header > .article-header-links > a:not(:first-child)").forEach(event => {
            event.style.backgroundColor = localStorage.getItem("rgbBackgroundColor")
        });
    };

    

});