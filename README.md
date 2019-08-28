# password-generator 密碼產生器
藉由輸入長度、需求，來產生密碼

# 功能
+ 輸入該密碼長度 (長度4~16)
+ 是否包含大寫英文字母 (例如:ABCDEFG)
+ 是否包含大寫英文字母 (例如:abcdefg)
+ 是否包含數字 (例如:123456)
+ 是否包含特殊符號 (例如:@#$%)
+ 輸入不顯示字元

## 相關安裝
1. 開啟terminal(終端機)，作業目錄下執行：
   ```
   git clone https://github.com/jofu1123/password-generator.git
   ```
2. 移動至目錄password-generator
   ```
   cd password-generator
   ```
3. 使用npm安裝相關套件
   ```
   npm install
   ```
4. 輸入指令啟動本機伺服器
   ```
   nodemon app.js
   ```
   出現Express is listening on localhost:3000即成功，並移置 http://localhost:3000 顯示結果

# 預覽畫面
![index](https://github.com/jofu1123/password-generator/blob/master/photo/%E9%A0%90%E8%A6%BD.jpg)
# 使用工具
 + [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) -開發code環境
 + [Express](https://www.npmjs.com/package/express) -應用程式架構
 + [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) -使用模板引擎
 + [Body-Parser](https://www.npmjs.com/package/body-parser) -處理URLencoded格式的請求
