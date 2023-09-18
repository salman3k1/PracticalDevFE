  // Datatype number
        console.log(2, 2.3, -4.6);

        /* 
         This is a 
         multi 
         line commment
        */
        // Datatype string
        console.log("Hello from javascript");

        // Datatype boolean
        console.log(true, false);

        var a = 2;
        console.log(a);
        var someText = "Hello from javascript";
        console.log(someText);

        var isEmployed = true;
        console.log(isEmployed);

        var firstName = "Practical";
        var lastName = "Dev";
        var age = 30;
        var isEmployed = true;

        var person = {
            firstName: "Practical",
            lastName: "Dev",
            age: 30,
            isEmployed: true,
        };

        console.log(person.lastName);

        a = 3;
        console.log(a);

        person = {
            firstName: "Practical",
            lastName: "Dev Edited",
            age: 30,
            isEmployed: true,
        };
        person.lastName = "Dev Edited Again";

        console.log(person);

        console.log(1 + 2);

        var result1 = 1 + 2;
        console.log(result1);

        var result2 = 1 + person.age;
        console.log(result2);

        function sum(number1, number2) {
            return number1 + number2;
        }

        sum(2, 2);
        sum(3, 4);
        sum(5, 5);
        sum(6, 4);

        var result3 = sum(2, 5);
        console.log(result3);

        var post1 = {
            title: "Blog Post Title 1",
            description: "Some description...",
            author: "Salman"
        };

        console.log(post1);
        console.log(person);

        function Post(title, description, author) {
            this.title = title;
            this.description = description;
            this.author = author;
        }

        var post2 = new Post("Blog Post Title 1", "Some description...", "Salman");
        var post3 = new Post("Blog Post Title 2", "Some description...", "Abid");

        console.log(post2, post3);

        var sum2 = function () {
            console.log(1 + 2);
        }

        var cat = {
            color: "Brown",
            name: "Catty",
            meow: function () {
                console.log("Meow.....!!!");
            },
            owner: {
                firstName: "",
                lastName: ""
            }
        }

        cat.meow();

        var array1 = ["Text", 22, "More text", {
            firstName: "",
            lastName: ""
        }, cat, post3];

        console.log(array1[2]);


        var div1 = document.getElementById("div1");
        div1.innerText = "My Edited Text";
        div1.style.background = 'Yellow';

        console.log(div1);

        var modal = new tingle.modal({
            footer: true,
            stickyFooter: false,
            closeMethods: ['overlay', 'button', 'escape'],
            closeLabel: "Close",
            cssClass: ['custom-class-1', 'custom-class-2'],
            onOpen: function() {
                console.log('modal open');
            },
            onClose: function() {
                console.log('modal closed');
            },
            beforeClose: function() {
                // here's goes some logic
                // e.g. save content before closing the modal
                return true; // close the modal
                return false; // nothing happens
            }
        });

        modal.setContent("<h1>here's some content</h1>");

        var toggleModalButton = document.getElementById("toggleModalButton");
        toggleModalButton.addEventListener('click', function(){
            modal.open();
        });


       
        