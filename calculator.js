let calculation = localStorage.getItem('calculation')||``;
        displaycalculation();
        function updateClculation(value){
           calculation = calculation + value;
           displaycalculation();

           localStorage.setItem('calculation',calculation);

        }
        function displaycalculation(){
        document.querySelector('.number-button')
            .innerHTML = calculation;
        
        }