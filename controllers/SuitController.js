import SuitModel from '../models/SuitModel.js';
import SuitForm from '../views/components/SuitForm.js';
import RepairButton from '../views/components/RepairButton.js';
import StatsDisplay from '../views/components/StatsDisplay.js';

// ควบคุมการทำงานหลักของระบบตรวจสอบชุดซุปเปอร์ฮีโร่

class SuitController {
    constructor() {
        // สร้างอินสแตนซ์ของคอมโพเนนต์หลัก
        this.model = new SuitModel();
        this.suitForm = new SuitForm(this.handleSuitCheck.bind(this));
        this.repairButton = new RepairButton(this.handleRepair.bind(this));
        this.statsDisplay = new StatsDisplay();
        this.currentSuitId = null;  // เก็บ ID ของชุดที่กำลังตรวจสอบ
    }

    
    // Start และแสดง UI
    initialize() {
        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="container">
                <h1>ระบบตรวจสอบชุดซุปเปอร์ฮีโร่</h1>
                ${this.suitForm.render()}
                <div id="result"></div>
                ${this.repairButton.render()}
                <div id="statsDisplay">
                    ${this.statsDisplay.render(this.model.getRepairStats())}
                </div>
            </div>
        `;

        // เริ่มทำงานของ Component
        this.suitForm.initialize();
        this.repairButton.initialize();
    }

    // check status ของชุดจาก ID
     
    handleSuitCheck(suitId) {
        const resultDiv = document.getElementById('result');
        
        // ตรวจสอบรูปแบบของ ID
        if (!this.model.validateSuitId(suitId)) {
            this.displayError(resultDiv, 'รหัสชุดไม่ถูกต้อง');
            return;
        }

        // ค้นหาชุด
        const suit = this.model.findSuitById(parseInt(suitId));
        if (!suit) {
            this.displayError(resultDiv, 'ไม่พบชุดที่ระบุในระบบ');
            return;
        }

        this.displaySuitStatus(resultDiv, suit);
    }

    // Output error message
    
    displayError(element, message) {
        element.innerHTML = `
            <div class="alert alert-danger">
                ${message}
            </div>
        `;
        this.repairButton.hide();
    }

    // status ของชุดและปุ่มซ่อม (ถ้าต้องซ่อม  และซ่อมจนกว่าจะผ่าน) 
    
    displaySuitStatus(element, suit) {
        const isValid = this.model.validateDurability(suit);
        element.innerHTML = `
            <div class="alert ${isValid ? 'alert-success' : 'alert-danger'}">
                <p>ประเภท: ${suit.type}</p>
                <p>ความทนทาน: ${suit.durability}</p>
                <p>สถานะ: ${isValid ? 'ผ่านเกณฑ์' : 'ไม่ผ่านเกณฑ์'}</p>
            </div>
        `;

        // อัพเดทสถานะปุ่มซ่อม
        this.currentSuitId = isValid ? null : suit.id;
        isValid ? this.repairButton.hide() : this.repairButton.show();
    }

    // ซ่อมชุดและอัพเดทสถานะ
    handleRepair() {
        if (this.currentSuitId) {
            this.model.repairSuit(this.currentSuitId);
            this.handleSuitCheck(this.currentSuitId);
            this.statsDisplay.update(this.model.getRepairStats());
        }
    }
}

export default SuitController; 