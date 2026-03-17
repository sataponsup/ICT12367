function openModal(movie) {
    const title = document.getElementById("modalTitle");
    const body = document.getElementById("modalBody");

    let data = {
        movie1: {
            title: "ล้วงลับเวทีลวง",
            content: `
                <p><b>ผู้กำกับ:</b> A Director</p>
                <p><b>นักแสดง:</b> Actor 1</p>
                <p>เรื่องราวลึกลับในวงการบันเทิง</p>
            `
        },
        movie2: {
            title: "เซลล์ขยันพันธุ์เดือด",
            content: `
                <p><b>ผู้กำกับ:</b> B Director</p>
                <p><b>นักแสดง:</b> Actor 2</p>
                <p>การต่อสู้ของเซลล์</p>
            `
        },
        movie3: {
            title: "Gundam Seed Freedom",
            content: `
                <p><b>ผู้กำกับ:</b> C Director</p>
                <p><b>นักแสดง:</b> Kira</p>
                <p>สงครามหุ่นยนต์</p>
            `
        }
    };

    title.innerHTML = data[movie].title;
    body.innerHTML = data[movie].content;

    let modal = new bootstrap.Modal(document.getElementById('movieModal'));
    modal.show();
}