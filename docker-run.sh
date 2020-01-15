#!/bin/bash
docker rmi registry.jiusuirenyuan.com:5000/game:30000
docker build -t registry.jiusuirenyuan.com:5000/game:30000 .
docker push registry.jiusuirenyuan.com:5000/game:30000

pw="Tlxd1134"
command1="ssh -l root 120.27.26.189"
copy1="scp -r ./web/ root@120.27.26.189:/var/www/zhuanpan/"

/usr/bin/expect <<-EOF
    spawn $command1;
    expect {
        "*password:" {send "$pw\r"; }
        "*(yes/no)?" {send "yes\r"; }
    }
    expect "*#"
    send "rm -rf /var/www/zhuanpan\r"
    set timeout -1
    expect "*#"
    send "docker stop game30000;docker rm game30000;\r"
    set timeout -1
    expect "*#"
    send "docker pull registry.jiusuirenyuan.com:5000/game:30000\r"
    set timeout -1
    expect "*#"
    send "docker run -d \\
    -e TZ=\"Asia/Shanghai\"  \\
    -p 30000:80  \\
    --restart always  \\
    --name=game30000 registry.jiusuirenyuan.com:5000/game:30000\r"
    set timeout -1
    expect "*#"
    send "exit\r"
    expect "*$"
    spawn $copy1;
    expect {
      "*password:" {send "$pw\r"; }
      "*(yes/no)?" {send "yes\r"; }
    }
    set timeout -1
    expect "*$"
expect eof
EOF
