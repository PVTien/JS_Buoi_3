// Bài 1
/**
 * INPUT: Lương 1 ngày, số ngày làm
 *
 * PROCESS:
 *      1. Tạo biến lương 1 ngày (salaryPerDay), số ngày làm (workingDay), tổng lương (totalSalary)
 *      2. Tính tổng lương = Lương 1 ngày * Số ngày làm
 *      3. Xuất kết quả
 *
 * OUTPUT: Tính lương dựa trên số ngày làm
 */
function ex1() {
  var salaryPerDay = +document.getElementById("salaryPerDay").value;
  var workingDay = +document.getElementById("workingDay").value;
  var totalSalary = salaryPerDay * workingDay;
  document.getElementById("salary").innerHTML = totalSalary;
}

// Bài 2
/**
 * INPUT: Nhập 5 số thực
 *
 * PROCESS:
 *      1. Tạo biến n1, n2, n3, n4, n5, average
 *      2. Tính giá trị trung bình của 5 số: average = (n1 + n2 + n3 + n4 + n5) / 5
 *      3. Xuất kết quả
 *
 * OUTPUT: Tính giá trị trung bình tổng 5 số
 */

function ex2() {
  var n1 = +document.getElementById("n1").value;
  var n2 = +document.getElementById("n2").value;
  var n3 = +document.getElementById("n3").value;
  var n4 = +document.getElementById("n4").value;
  var n5 = +document.getElementById("n5").value;
  var average = (n1 + n2 + n3 + n4 + n5) / 5;
  document.getElementById("average").innerHTML = average;
}

// Bài 3
/**
 * INPUT: Nhập số tiền USD, giá USD hiện nay = 23.500 VND
 *
 * PROCESS:
 *      1. Tạo biến moneyUSD, moneyVND
 *      2. Tính tiền sau quy đổi: moneyVND = moneyUSD * 23500
 *      3. Xuất kết quả
 *
 * OUTPUT: Tính số tiền quy đổi từ USD sang VND
 */
function ex3() {
  var moneyUSD = +document.getElementById("moneyUSD").value;
  var moneyVND = moneyUSD * 23500;
  document.getElementById("moneyVND").innerHTML = moneyVND;
}

// Bài 4
/**
 * INPUT: Nhập chiều dài, chiều rộng HCN
 *
 * PROCESS:
 *      1. Tạo biến CD, CR, S, P
 *      2. Tính chu vi: P = (CD + CR) * 2
 *      3. Tính diện tích: S = CD * CR
 *      4. Xuất kết quả
 *
 * OUTPUT: Tính chu vi, diện tích HCN
 */
function ex4() {
  var CD = +document.getElementById("CD").value;
  var CR = +document.getElementById("CR").value;
  var P = (CD + CR) * 2;
  var S = CD * CR;
  document.getElementById("P").innerHTML = P;
  document.getElementById("S").innerHTML = S;
}

// Bài 5
/**
 * INPUT: Nhập 1 số có 2 chữ số
 *
 * PROCESS:
 *      1. Tạo biến number, number1, number2, totalNumber
 *      2. Lấy số hàng đơn vị: number1 = number % 10
 *      3. Lấy số hàng chục: number2 = Math.floor(number / 10)
 *      4. Cộng 2 số hàng đơn vị và hàng chục: totalNumber = number1 + number2
 *      5. Xuất kết quả
 *
 * OUTPUT: Tính tổng 2 ký số của số vừa nhập
 */
function ex5() {
  var number = +document.getElementById("number").value;
  var number1 = number % 10;
  var number2 = Math.floor(number / 10);
  var totalNumber = number1 + number2;
  document.getElementById("totalNumber").innerHTML = totalNumber;
}
