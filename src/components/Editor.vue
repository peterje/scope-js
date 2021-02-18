<template>
  <div>
    hi
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      code: "hello there"
    };
  },
  mounted() {
    const aceScript = document.createElement("script");
    aceScript.setAttribute("src", "../lib/ace-builds/src-noconflict/ace.js");
    document.head.appendChild(aceScript);
    console.log(aceScript);
    // eslint-disable-next-line no-undef
    const editor = ace.edit("editor");
    console.log(editor);
  }
};
</script>
<style scoped></style>
