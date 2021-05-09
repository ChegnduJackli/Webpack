
#!/usr/bin/python3
#忽略证书
#pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org 安装的包名字.whl
print('hello world')

import pymysql
 
# 打开数据库连接
#db = pymysql.connect("10.157.107.89:3306","user_apex","Mysql@1234","apex_admin_dev" )
db = pymysql.connect(host='10.157.107.89' # 连接名称，默认127.0.0.1
,user = 'user_apex' # 用户名
,passwd='Mysql@1234' # 密码
,port= 3306 # 端口，默认为3306
,db='apex_admin_dev' # 数据库名称
,charset='utf8' # 字符编码
)
# 使用 cursor() 方法创建一个游标对象 cursor
cursor = db.cursor()
 
# 使用 execute()  方法执行 SQL 查询 
cursor.execute("SELECT VERSION()")
 
# 使用 fetchone() 方法获取单条数据.
data = cursor.fetchone()
 
print ("Database version : %s " % data)
 
# 关闭数据库连接
db.close()
