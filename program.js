const readline = require("readline");

const DB_COLOR = [
  {
    name: "화이트",
    code: "#fff",
  },
  {
    name: "블랙",
    code: "#000",
  },
];

const startProgram = () => {
  console.log("ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ");
  console.log("1. color list");
  console.log("2. Create Color");
  console.log("3. Delete Color");
  console.log("4. Exit Program");
  console.log("ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ");

  console.log("[SYSTEM] 메뉴중 하나를 선택해주세요.");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", (answer) => {
    const compare = parseInt(answer);
    switch (compare) {
      case 1:
        viewColor();
        break;
      case 2:
        createColor();
        break;
      case 3:
        deleteColor();
        break;
      case 4:
        console.log("[SYSTEM] 프로그램 종료");
        break;
      default:
        console.log("[SYSTEM] 잘못 입력했습니다.");
        startProgram();
        break;
    }
  });
};

startProgram();

const viewColor = () => {
  DB_COLOR.forEach((color) => {
    console.log("------------------------");
    console.log(`색상 이름 : ${color.name}`);
    console.log(`색상 코드 : ${color.code}`);
    console.log("------------------------");
  });
  startProgram();
};

const createColor = () => {
  const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("[SYSTEM]추가할 색상의 이름을 입력하고 엔터를 눌러주새요.");
  rl2.on("line", (name) => {
    const rl3 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log(`[SYSTEM] 입력하신 색상 이름은 ${name} 입니다.`);

    console.log("[SYSTEM]추가 하실 코드를 적어주세요");
    rl3.on("line", (code) => {
      console.log(`입력하신 코드는 ${code} 입니다.`);

      const prevAddData = {
        name: name,
        code: code,
      };

      DB_COLOR.push(prevAddData);

      console.log(`입력하신 ${name} 색상이 데이터베이스에 추가되었습니다.`);
      startProgram();
    });
  });
};

const deleteColor = () => {
  console.log("컬러 삭제");
};
