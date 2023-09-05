module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        type: "input",
        name: "name",
        message: "패키지 이름을 woochang로 입력하세요.",
      })
      .then(({ name }) => {
        if (!name) throw new Error("패키지 이름을 입력하세요.");
        if (!/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/.test(name))
          throw new Error("패키지 이름은 woochang 이어야 합니다.");

        return { name, args };
      }),
};