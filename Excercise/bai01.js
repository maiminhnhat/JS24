const a = {
    x: 1,
    y: 1,
}

const b = {
    x: 3,
    y: 5,
}

const c = {
    x: -2,
    y: 3,
}
// 1. Hàm dùng để tính khoảng cách giữa 2 điểm (arrow function)
const getDistance = (point1, point2) =>  Math.sqrt((point1.x - point2.x)**2 + (point1.y - point2.y)**2);

// 2. Tính tổng 3 cạnh của tam giác abc (expression function)