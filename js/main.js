let startBtn = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value'),
    expensesItemInput = document.getElementsByClassName('expenses-item'),

    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn =document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-persent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let money, time;


startBtn.addEventListener('click' , function(){
    time  = prompt("Enter your date in format YYYY-MM-DD", '');
    money = +prompt("What is your budget for on month",  '');

    while(isNaN(money) || money == '' || money == null ){
        money = +prompt("What is your budget for on month",  '');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
} );


expensesItemBtn.addEventListener('click', function(){
    let sum = 0;
    for (let i=0; i<expensesItemInput.length ; i++){
        let a = expensesItemInput[i].value,
            b = expensesItemInput[++i].value;
    
        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50 ){
            
            console.log("Done");
            appData.expenses[a] = b;   

            sum += +b;
        } else{
            console.log("Incorrect result");
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for(let i = 0; i<optionalExpensesItem.length; i++){
        let questionExpenses = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = questionExpenses;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function(){
    if(appData.budget != undefined){
        appData.moneyPerDay = (appData.budget/30).toFixed(); 
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if(appData.moneyPerDay < 100){
            levelValue.textContent = "It's minimum living wage";
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            levelValue.textContent = "It's medium living wage";
        }  else if (appData.moneyPerDay > 2000){
            levelValue.textContent = "Hight level living wage";
        }   else{
            levelValue.textContent = "Eror";
        }
    }else{
        dayBudgetValue.textContent = "Eror. Put firstly your income";
    }   
});

chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function(){
            
        },
        detectDayBudget: function(){
            
            alert("Budjet per day is" + appData.moneyPerDay);
        },
        detectLevel: function(){
            
        },
        checkSavings: function(){
            if(appData.savings == true){
                let save = +prompt("How much saved money ?" , ''),
                    percent = +prompt("What is the percent", '');
                
                appData.monthIncome = save/100/12*percent;
                alert("Income from deposit per month is:" + appData.monthIncome);
            }
        },
        chooseOptExpenses: function(){
            
        },
        chooseIncome: function(){

            if (typeof(items) == "string" || items != "" || typeof(items) != null) {
                
                appData.income.push(prompt("Maybe smth else more ?" , ''));
                appData.income.sort();

                console.log("Function went well");
            } else {
                console.log("Something wrong or  data is incorrect");
            }    
            
            appData.income.forEach (function (itemmassive, i) {
                alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
            });
        }

};

// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
// }






