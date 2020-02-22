function classify() {
    let grade1 = +document.getElementById("test-input").value;
    let grade2 = +document.getElementById("midterm-input").value;
    let grade3 = +document.getElementById("lastterm-input").value;
    let total = (grade1 + grade2 * 2 + grade3 * 3) / 6;
    if (total <= 6 ) {
        document.getElementById("result").innerText = 'Xếp loại học lực Trung bình'
    } else if (total <= 7) {
        document.getElementById("result").innerText = 'Xếp loại học lực Trung bình Khá'
    } else if (total <= 8) {
        document.getElementById("result").innerText = 'Xếp loại học lực Khá'
    } else if (total <= 9) {
        document.getElementById("result").innerText = 'Xếp loại học lực Giỏi'
    } else {
        document.getElementById("result").innerText = 'Xếp loại học lực Xuất Sắc';
    }
    }