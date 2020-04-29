# 正则匹配Number字面量

- 整数

  ```
  /^-?\\d+$/
  ```

- 浮点数

  ```
  /^(-?\\d+)(\\.\\d+)?$/
  ```

- 二进制数

  ```
  /^[01]+$/
  ```

- 八进制数

  ```
  /^[0-7]+$/
  ```

- 十六进制数

  ```
  /(^0x[a-f0-9]{1,2}$)|(^0X[A-F0-9]{1,2}$)|(^[A-F0-9]{1,2}$)|(^[a-f0-9]{1,2}$)/
  ```

- Number字面量正则

  ```
  /(^-?\\d+$)|(^(-?\\d+)(\\.\\d+)?$)|(^[01]+$)|(^[0-7]+$)|((^0x[a-f0-9]{1,2}$)|(^0X[A-F0-9]{1,2}$)|(^[A-F0-9]{1,2}$)|(^[a-f0-9]{1,2}$))/
  ```