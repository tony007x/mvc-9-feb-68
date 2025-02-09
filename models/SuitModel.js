import sampleData from './sampleData.js';

class SuitModel {
    constructor() {
        this.suits = [...sampleData];
        this.repairCount = {
            'ชุดทรงพลัง': 0,
            'ชุดลอบเร้น': 0,
            'ชุดปกปิดตัวตน': 0
        };
    }

    findSuitById(id) {
        return this.suits.find(suit => suit.id === parseInt(id));
    }

    // ตรวจสอบรหัสชุด 6 หลัก ไม่ขึ้นต้นด้วย 0
    validateSuitId(id) {
        const idStr = id?.toString();
        return idStr?.length === 6 && !idStr.startsWith('0');
    }

    // เกณฑ์ตรวจสอบความทนทาน
    validateDurability(suit) {
        const rules = {
            'ชุดทรงพลัง': d => d >= 70,
            'ชุดลอบเร้น': d => d >= 50,
            'ชุดปกปิดตัวตน': d => ![3, 7].includes(d % 10)
        };
        return rules[suit.type]?.(suit.durability) ?? false;
    }

    // เพิ่มความทนทาน 25 หน่วย (สูงสุด 100) ซ่อมจนกว่าจะผ่าน
    repairSuit(id) {
        const suit = this.findSuitById(id);
        if (!suit) return false;
        // ซ่อมจนกว่าจะผ่าน
        suit.durability = Math.min(suit.durability + 25, 100);
        this.repairCount[suit.type]++;
        return true;
    }

    getRepairStats() {
        return this.repairCount;
    }
}

export default SuitModel;