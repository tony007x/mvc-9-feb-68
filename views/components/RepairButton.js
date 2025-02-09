// Component สำหรับปุ่มซ่อมแซม
class RepairButton {
    // รับ callback function สำหรับการซ่อมแซม
    constructor(onRepair) {
        this.onRepair = onRepair;
    }

    // สร้าง HTML ของปุ่มซ่อมแซม
    render() {
        return `
            <div id="repairSection" style="display: none;">
                <button id="repairSuit" class="btn btn-warning">
                    ซ่อมแซม (+25)
                </button>
            </div>
        `;
    }

    // ผูก event listener กับปุ่ม
    initialize() {
        const repairBtn = document.getElementById('repairSuit');
        repairBtn.addEventListener('click', this.onRepair);
    }

    // แสดงส่วนซ่อมแซม
    show() {
        document.getElementById('repairSection').style.display = 'block';
    }

    // ซ่อนส่วนซ่อมแซม
    hide() {
        document.getElementById('repairSection').style.display = 'none';
    }
}

export default RepairButton;