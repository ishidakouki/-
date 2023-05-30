//検索条件に一致する番組を計算して出力する

export const search = (programList:any,serachValue:any) => {

    //TODO:ソート機能の実装

    //

    //並び替え関数
    const createAsc = (a,b) => {
        return a-b;
    }

    const createDesc = (a,b) => {
        return b-a;
    }


    //console.log(programList,serachValue)
    const { id, name, approval, situation } = serachValue;
    //console.log( id, name, approval, situation)

    // idの検索
    const filteredById = programList.filter((program) => {
        console.log(serachValue.id)
      if (serachValue.id === "asc") {
        console.log("asc")
        //小さい順
        console.log(programList.id.sort(createAsc))
      } else if (serachValue.id === "desc") {
        //大きい順
        console.log("desc")

        console.log(programList.id.sort(createDesc))
      } else {
        return true
      }
    });

    console.log(filteredById)

    // // nameの検索
    // const filteredByName = filteredById.filter((program) => {
    //   if (name === "") {
    //     return true; // 空の場合は条件なしで全てのプログラムを返す
    //   }
    //   return program.name.includes(name);
    // });

    // // 承認の検索
    // const filteredByApproval = filteredByName.filter((program) => {
    //   if (approval === "all") {
    //     return true; // "すべて" の場合は条件なしで全てのプログラムを返す
    //   }
    //   const isApproved = approval === "approved";
    //   return program.approval === isApproved;
    // });

    // // 公開設定の検索
    // const filteredBySituation = filteredByApproval.filter((program) => {
    //   if (situation.length === 0) {
    //     return true; // 一つも選択されていない場合は条件なしで全てのプログラムを返す
    //   }
    //   return situation.includes(program.situation);
    // });

    return programList;

}