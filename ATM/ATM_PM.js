import {CardScanner, Keypad, Monitor, BillStorage, BillDisburser, SystemDatabase, SystemClock} from './ATM_SM.js'

const database = SystemDatabase();

const ATM_cardScanner = CardScanner(true, true, true);
const ATM_keypad = Keypad(true);
const ATM_monitor = Monitor(true);
const ATM_billStorage = BillStorage(true);
const ATM_billDisburser = BillDisburser(true);
