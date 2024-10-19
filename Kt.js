//Bài 1
// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// let str1 = "program";
// console.log(reverseString(str1)); 


// Bài 2
// function FirstLetter(str) {
//     var array1 = str.split(' ');
//     var newarray1 = [];
    
//     for(var x = 0; x < array1.length; x++){
//         newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//     }
//     return newarray1.join(' ');
//   }

//   console.log(FirstLetter("this is A Test"));

//Bài 3 
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// // Ví dụ 
// let Arr = ["one", "two", "three", "one", "one", "four", "five", "four", "five", "five"];
// let uniqueArr = removeDuplicates(Arr);
// console.log(uniqueArr); // In ra: ["one", "two", "three", "four", "five"]


//Bài 4



// function bubbleSort(array) {
//     var size = array.length;
  

//     for (var i = 0; i < size - 1; i++) {
//       for (var j = 0; j < size - i - 1; j++) {
  
       
//         if (array[j] > array[j + 1]) {
  
//           var temp = array[j];
//           array[j] = array[j + 1];
//           array[j + 1] = temp;
//         }
//       }
//     }
//   }
  
//   var arr = [3, 5, 2, 1, 4];
//   bubbleSort(arr);
//   console.log(arr);



//Bài 5
// let employees = [
//     { id: 1, name: "Nguyen The Binh" },
//     { id: 2, name: "Tran Van Tu" },
//     { id: 3, name: "Nguyen Anh Tuan" }
// ];

// // Hàm đọc danh sách nhân viên
// function readEmployees() {
//     console.log("Danh sách nhân viên:");
//     employees.forEach(employee => {
//         console.log(`ID: ${employee.id}, Tên: ${employee.name}`);
//     });
// }

// // Hàm thêm nhân viên
// function createEmployee() {
//     const name = prompt("Nhập tên nhân viên mới: ");
//     if (name) {
//         const newId = employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
//         employees.push({ id: newId, name });
//         console.log(`Đã thêm nhân viên: ${name}`);
//     } else {
//         console.log("Tên không được để trống.");
//     }
// }

// // Hàm cập nhật thông tin nhân viên
// function updateEmployee() {
//     const id = parseInt(prompt("Nhập ID nhân viên cần cập nhật: "));
//     const newName = prompt("Nhập tên mới: ");
//     const employee = employees.find(emp => emp.id === id);
    
//     if (employee) {
//         if (newName) {
//             console.log(`Đã cập nhật nhân viên ${employee.name} thành ${newName}`);
//             employee.name = newName;
//         } else {
//             console.log("Tên không được để trống.");
//         }
//     } else {
//         console.log("Nhân viên không tồn tại.");
//     }
// }

// // Hàm xóa nhân viên
// function deleteEmployee() {
//     const id = parseInt(prompt("Nhập ID nhân viên cần xóa: "));
//     const index = employees.findIndex(emp => emp.id === id);
    
//     if (index !== -1) {
//         console.log(`Đã xóa nhân viên: ${employees[index].name}`);
//         employees.splice(index, 1);
//     } else {
//         console.log("Nhân viên không tồn tại.");
//     }
// }

// // Ví dụ sử dụng
// readEmployees(); // Đọc danh sách nhân viên

// createEmployee(); // Thêm nhân viên mới
// readEmployees(); // Đọc lại danh sách

// updateEmployee(); // Cập nhật nhân viên
// readEmployees(); // Đọc lại danh sách

// deleteEmployee(); // Xóa nhân viên
// readEmployees(); // Đọc lại danh sách



//Bài 6



function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function isValidDate(day, month, year) {
    if (month < 1 || month > 12) return false; // Kiểm tra tháng hợp lệ

    // Số ngày trong từng tháng
    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return day >= 1 && day <= daysInMonth[month - 1]; // Kiểm tra ngày hợp lệ
}

function getNextDate(day, month, year) {
    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if (day < daysInMonth[month - 1]) {
        return { day: day + 1, month, year }; // Chỉ cần tăng ngày
    } else if (month === 12) {
        return { day: 1, month: 1, year: year + 1 }; // Chuyển sang năm mới
    } else {
        return { day: 1, month: month + 1, year }; // Chuyển sang tháng mới
    }
}

