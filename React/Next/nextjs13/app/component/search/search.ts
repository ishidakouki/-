import { Program,SearchValue } from "../../interfaces/interfaces";
//検索条件に一致する番組を計算して出力する

export const search = (programList:Program[],serachValue:SearchValue) => {

  const { id, name, approval, situation } = serachValue;

    // idの検索処理
    const idSort = (programList:Program[]) => {
      let sortProgramList = programList.slice()
      if(id === "desc" ) {
        const sortedList:Program[] = sortProgramList.sort((a, b) => b.id - a.id);
        //console.log(sortedList)
        return sortedList;
      } else if (id === "asc") {
        const sortedList:Program[] = sortProgramList.sort((a, b) => a.id - b.id);
        //console.log(sortedList)
        return sortedList;
      } else {
        return sortProgramList
      }
    }

    const sortProgram = idSort(programList);

    // nameの検索
    const filteredByName = sortProgram.filter((program:Program) => {
      if (name === "") {
        return program;
      }
      return program.name.startsWith(name);
    });

    // 承認の検索
    const filteredByApproval = filteredByName.filter((program:Program) => {
      if (approval === "true") {
        return program.approval === true
      } else if (approval === "false") {
        return program.approval === false
      } else {
        return program;
      }
    });

    //TODO: 公開設定のコードはかなり汚いので後でリファクタリングする
    let newProgram = [];

     //すべてtrue、falseの場合
     if(situation[0] && situation[10] && situation[20]) {
      console.log("すべてtrue")
      newProgram.push(...filteredByApproval)
    } else if (!situation[0] && !situation[10] && !situation[20]) {
      console.log("すべてfalse")
      newProgram.push(...filteredByApproval)
    } else {
      //各項目のチェックを確認し配列に追加する
      if(situation[0]) {
        newProgram.push(...filteredByApproval.filter((program) => program.situation === 0))
        console.log(newProgram,"放送中")
      }
      if (situation[10]) {
        newProgram.push(...filteredByApproval.filter((program) => program.situation === 10))
        console.log(newProgram,"放送予定")
      }
      if (situation[20]) {
        newProgram.push(...filteredByApproval.filter((program) => program.situation === 20))
        console.log(newProgram,"作成中")
      }
    }

    return newProgram;
}