// แสดงสถิติการซ่อม
class StatsDisplay {
    // HTML template สำหรับแสดงสถิติ
    render(stats) {
        return `
            <div class="stats-container">
                <h3>สถิติการซ่อม</h3>
                <ul>
                    ${Object.entries(stats)
                        .map(([type, count]) => `<li>${type}: ${count}</li>`)
                        .join('')}
                </ul>
            </div>
        `;
    }

    // อัพเดทข้อมูลสถิติ
    update(stats) {
        document.getElementById('statsDisplay').innerHTML = this.render(stats);
    }
}

export default StatsDisplay;