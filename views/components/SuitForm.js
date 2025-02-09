class SuitForm {
    // รับ callback function จัดการการ submit
    constructor(onSubmit) {
        this.onSubmit = onSubmit;
    }

    //UI form สำหรับกรอกรหัสชุด
    render() {
        return `
            <div class="form-group">
                <input type="number" 
                    id="suitId" 
                    class="form-control" 
                    min="100000" 
                    max="999999" 
                    placeholder="กรอกรหัสชุด 6 หลัก">
                <button id="checkSuit" class="btn btn-primary">ตรวจสอบ</button>
            </div>
        `;
    }

    // ผูก event listener กับปุ่มตรวจสอบ
    initialize() {
        const checkBtn = document.getElementById('checkSuit');
        checkBtn.addEventListener('click', () => {
            const suitId = document.getElementById('suitId').value;
            this.onSubmit(suitId);
        });
    }
}

export default SuitForm;