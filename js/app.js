(function () {
    // …
    console.log(`Loaded app.js`);
    let bodyData = {
        "mainPage": {
            "titleSubheading": "Welcome To Our Studio!",
            "titleHeading": "It's Nice To Meet You",
            "titleMore": "Tell Me More",
            "links": [{
                "id": 0,
                "name": "Services",
                "href": "services"
            }, {
                "id": 1,
                "name": "Portfolio",
                "href": "portfolio"
            }, {
                "id": 2,
                "name": "About",
                "href": "about"
            }, {
                "id": 3,
                "name": "Team",
                "href": "team"
            }, {
                "id": 4,
                "name": "Test",
                "href": "test"
            }, {
                "id": 5,
                "name": "Contact",
                "href": "contact"
            }],
            "sections": {
                "titleSubheading": "ServicesCodeSubheading",
                "titleHeading": "ServicesCodeHeading Lorem ipsum dolor sit amet consectetur.",
                "sectionList": [
                    {
                        "id": 0,
                        "title": "E-Commerce from code",
                        "description": "Some description from service 1",
                        "frameType": "fa-square",
                        "innerType": "fa-lock",
                    },
                    {
                        "id": 1,
                        "title": "Responsive Design from code",
                        "description": " Some description from service 2",
                        "frameType": "fa-square",
                        "innerType": "fa-lock",
                    },
                    {
                        "id": 2,
                        "title": "Web Security from code 2",
                        "description": " Some description from service 3",
                        "frameType": "fa-square",
                        "innerType": "fa-lock",
                    },
                    {
                        "id": 3,
                        "title": "Web Security from code 2",
                        "description": " Some description from service 3",
                        "frameType": "fa-square",
                        "innerType": "fa-lock",
                    }
                ]
            },
            "portfolio": {
                "titleSubheading": "Portfolio",
                "titleHeading": "Lorem ipsum dolor sit amet consectetur.",
                "sectionList": [
                    {
                        "id": 0,
                        "title": "E-Commerce from code",
                        "description": "Some description from service 1",
                        "frameType": "fa-square",
                        "innerType": "fa-lock",
                    },
                    {
                        "id": 1,
                        "title": "Responsive Design from code",
                        "description": " from codeLorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
                        "frameType": "fa-square",
                        "innerType": "fa-lock",
                    },
                    {
                        "id": 2,
                        "title": "Responsive Design from code 2",
                        "description": " from code 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
                        "frameType": "fa-square",
                        "innerType": "fa-lock",
                    }
                ]
            },
            "about": {
                "titleSubheading": "ServicesCodeSubheading",
                "titleHeading": "ServicesCodeHeading Lorem ipsum dolor sit amet consectetur.",
                "sectionList": [
                    {
                        "id": 0,
                        "heading": "2009-2011",
                        "subheading": "Our Humble Beginnings",
                        "body": "fa-square",
                        "img": "assets/img/about/1.jpg",
                        "inverted": 0,
                    },
                    {
                        "id": 1,
                        "heading": "E-Commerce from code",
                        "subheading": "Some description from service 1",
                        "body": "fa-square",
                        "img": "assets/img/about/2.jpg",
                        "inverted": 1,
                    }, 
                    {
                        "id": 2,
                        "heading": "E-Commerce from code",
                        "subheading": "Some description from service 1",
                        "body": "fa-square",
                        "img": "assets/img/about/3.jpg",
                        "inverted": 0,
                    },                    
                    {
                        "id": 3,
                        "heading": "E-Commerce from code",
                        "subheading": "Some description from service 1",
                        "body": "Test4",
                        "img": "assets/img/about/4.jpg",
                        "inverted": 1,
                    },                    
                    {
                        "id": 3,
                        "heading": "",
                        "subheading": "",
                        "body": "<h4> Be Part <br /> Of Our<br />  Story!</h4>",
                        "img": "",
                        "inverted": 1,
                    },
                ]
            },
        }
    };


    bodyData.mainPage.links.forEach(function (index) {
        $("#ulLinks").append('<li class="nav-item"><a class="nav-link" href="#' + index.href + '">' + index.name + '</a></li>');
        '<li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>'
    });

    // $("#btnAddService").click(function(){
        $("#servicesSectionRow").empty();
        bodyData.mainPage.sections.sectionList.forEach(function( index ) {
            $("#servicesSectionRow").append('<div class="col-md-4" id="servicesSectionItem_'+index.id+'" > <span class="fa-stack fa-4x"><i class="fas fa-circle fa-stack-2x text-primary"></i><i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i></span><h4 class="my-3">'+index.title+'</h4><p class="fw-bolder">'+index.description+'</p></div>');
        });
    // });
    
    // $("#btnAddService").click(function(){
        $("#timelineList").empty();
        bodyData.mainPage.about.sectionList.forEach(function( index ) {
            if(index.inverted){
                if(index.subheading === ""){
                    $("#timelineList").append('<li class="timeline-inverted"><div class="timeline-image"><h4>Be Part<br>Of Our<br>Story!</h4></div></li>');
                } else {
                    $("#timelineList").append('<li class="timeline-inverted"><div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..."></div><div class="timeline-panel"><div class="timeline-heading"><h4>March 2011</h4><h4 class="subheading">An Agency is Born</h4></div><div class="timeline-body"><p class="fw-bolder">1 consectetur!</p></div></div></li>');
                };
            
            } else{
                $("#timelineList").append('<li><div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..."></div><div class="timeline-panel"><div class="timeline-heading"><h4>2009-2011</h4><h4 class="subheading">Our Humble Beginnings</h4></div><div class="timeline-body"><p class="fw-bolder">consectetur!</p></div></div></li>');
            };
        });
    // });

    
    // let viewModel = {
    //     apiData: ko.observable(bodyData),
    //     firstName: "Bart"
    // };
    // ko.applyBindings(viewModel);
})();