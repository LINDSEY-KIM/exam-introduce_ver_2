

        // ---------▽ 1. 풀이_1  -------------
        (function(){

            // 1. 버튼 이벤트 생성
            // 2. 프롬프트창이 뜨고 입력할 수 있도록
            // 3. 입력된 값을 매개변수 처리하여 생성자 함수에 넣을 것

            const btnEl = document.querySelector('button');

            function Person(names, age){
                this.names = names;
                this.age = age;
            }

            Person.prototype.intro = function(){
                const divEl = document.createElement('div');
                divEl.innerHTML = `내 이름은 ${this.names}, 나이는 ${this.age}세야</br>`;
                // console.log(divEl);
                document.body.appendChild(divEl);
            };

            const handleClick = () => {
                const namesInput = prompt('이름을 입력하세요.');
                const ageInput = prompt('나이를 입력하세요.');
                const man = new Person(namesInput, ageInput);
                man.intro();
            };

            btnEl.addEventListener('click', handleClick)

        })();
        // intro라는 함수 1개만 호출이 가능한 방법





        // ---------▽ 2. 풀이_2  -------------
        // (function(){

        //     const btnEl = document.querySelector('button');

        //     function Person(names, age){
        //         this.names = names;
        //         this.age = age;
        //         this.intro();
        //     }

        //     Person.prototype = {
        //         constructor:Person,
        //         intro : function () {
        //             const divEl = document.createElement('div');
        //             divEl.innerHTML = `이름은 ${this.names}, 나이는 ${this.age}}세야</br>`;
        //             document.body.innerHTML(divEl);
        //         },
        //     };

        //     const handleClick = () => {
        //         const namesInput = prompt('이름을 입력하세요.');
        //         const ageInput = prompt('나이를 입력하세요.');
        //         const man = new Person(namesInput, ageInput);
        //         // man.intro();
        //     };

        //     btnEl.addEventListener('click', handleClick)

        // })();


        // ▲ 하다가 말았음.  작동 X