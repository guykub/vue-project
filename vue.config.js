const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: ['vuex', 'some-other-package'] // แปลงเฉพาะ vuex และแพ็กเกจที่ระบุ
})
