
class CardScanner {
    constructor(cardReadStatus, cradInsertStatus, cardEjectStatus) {
        this.cardReadStatus = cardReadStatus;
        this.cardInsertStatus = cradInsertStatus;
        this.cardEjectStatus = cardEjectStatus;
        this.cardInput = null;
        this.cardInsertEngine = true;//do we need the engines
        this.cardEjectEngine = true;//do we need the engines
    }
}

class Keypad {
    constructor(keypadStatus) {
        this.keypadStatus = keypadStatus;
        this.enter = false;
        this.cancel = false;
        this.inputData = null;
    }
}

class Monitor {
    constructor(monitorStatus) {
        this.monitorStatus = monitorStatus;
        this.outputInformation = null;
        this.currentDisplay = null;
    }
}

class BillStorage {
    constructor(billStorageStatus) {
        this.billStorageStatus = billStorageStatus;
        this.billsDeliveryEngine = true;
        this.billsAmount = null;//the physical limit of bill output. 1-1000
        this.billsLevel = 999999;//the amount of money inside the bill storage
    }
}

class BillDisburser {
    constructor(billDisburserStatus) {
        this.billDisburserStatus = billDisburserStatus;
        this.disburserEngine = true;
        this.amountDisbursed = null;//1-1000
    }
}

class SystemDatabase {
    constructor(){
        this.systemAccount = [//a few fake accounts here
            {
                accountNum: 111,
                accountStatus: true,
                PIN: 1111,
                cardHolder: "111",
                balance: 1111,
                maxAllowableWithdraw: 1000,
                currentWithdraw: null//5 - 1000
            },
            {
                accountNum: 222,
                accountStatus: true,
                PIN: 2222,
                cardHolder: "222",
                balance: 10,
                maxAllowableWithdraw: 1000,
                currentWithdraw: null//5 - 1000
            },
            {
                accountNum: 333,
                accountStatus: false,
                PIN: 3333,
                cardHolder: "111",
                balance: 333,
                maxAllowableWithdraw: 1000,
                currentWithdraw: null//5 - 1000
            }
        ]
    }
}

class SystemClock {
    constructor(t,currentHour, currentMinute, currentSecond, interruptCounter, timer) {
        this.t = t;
        this.currentTime = {
            hour: currentHour,
            minute: currentMinute,
            second: currentSecond
        };
        this.clockInterval = 100;//100ms
        this.interruptCounter = interruptCounter;//0 - 9
        this.timer = timer;
    }
}

