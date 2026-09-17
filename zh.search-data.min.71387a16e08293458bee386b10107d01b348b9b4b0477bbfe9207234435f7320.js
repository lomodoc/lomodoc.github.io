"use strict";(function(){const t={encode:!1,tokenize:function(e){return e.replace(/[\x00-\x7F]/g,"").split("")}};t.doc={id:"id",field:["title","content"],store:["title","href","section"]};const e=FlexSearch.create("balance",t);window.bookSearchIndex=e,e.add({id:0,href:"/zh/docs/Installation/lomorage-client/installation-ios/",title:"iOS",section:"Lomorage客户端",content:` 安装Lomorage iOS客户端 # 您可以在iPad或iPhone上安装Lomorage客户端应用，最低支持的iOS系统版本是10.3。
安装完Lomorage客户端，启动就可以自动发现同一网络中运行的“Lomorage照片助手”，如果您有多台设备运行“Lomorage照片助手”，那些会列举出来供选择。如果未能自动发现&quot;Lomorage照片助手&quot;，您可以选择扫码的方式登陆（&ldquo;Lomorage照片助手&quot;运行在Windows或者MacOS下，打开“Lomorage照片助手”应用设置），或者手动输入IP地址和端口。
然后您可以创建用户，选择存储目录，登陆后，会花上几分钟来导入您相册的照片和视频，然后您可以选择需要上传的文件进行备份，如果已经备份成功，图片或视频下会显示一个绿色的小勾。在备份的选项卡里，显示的是远程备份过但本地没有的文件，所以如果您删除掉本地成功备份的文件，它们会显示在远程备份里面。
APP会在后台对照片进行智能分析，分析后您可以在APP中进行按时间，地点，场景，和文字进行查找，并可以找到相似图片。
对于不方便自己输入服务器地址和密码的家庭成员（比如老人、小孩），可以在已经登录的设备上打开设置，选择&rdquo;Show Sign-In Code&quot;（生成登录二维码）。输入对方的用户名和密码后会生成一个二维码，把手机交给他们扫描，就能直接登录他们自己的账户。二维码里包含了对方的密码，所以只能让他们当面扫描，不要截图或转发。
`}),e.add({id:1,href:"/zh/docs/Installation/lomorage-service/installation-raspbian/",title:"Raspbian",section:"Lomorage照片助手",content:` 在树莓派上安装&quot;Lomorage照片助手&quot;程序 # 要在树莓派上运行，您需要先购买一个 树莓派，Lomorage可以运行在以下型号的机器上:
Raspberry Pi 4 Model B Raspberry Pi 3 Model B+ Raspberry Pi Zero W Raspberry Pi 2 Model B 如果您还没有树莓派，我们建议购买新款的树莓派，会有更好的性能。下面是您需要的最小配置:
树莓派主板 配套电源 16GB MicroSD卡 有3种方式来在Raspberry Pi上安装&quot;Lomorage照片助手&quot;程序, 一种是安装预编译好的系统镜像，该镜像已经安装了所有&quot;Lomorage照片助手&quot;程序依赖的库和第三方工具，简单快捷，推荐使用；如果您已经有树莓派在运行其他服务，您也可以使用Docker镜像来安装，或者使用从APT源安装。
安装系统镜像 # 预装的系统镜像包括所有的包:
lomo-backend: &ldquo;Lomorage照片助手&quot;程序
lomo-base: 系统工具，包括网络配置，开关控制, 磁盘加载, 蓝牙控制台
lomo-frame: 数码相框程序
点击下面的链接下载系统镜像。
Raspberry Pi 下载了系统镜像后, 你可以使用 balenaEtcher将其安装到MicroSD卡, balenaEtcher提供Windows和macOS版本。
将MicroSD卡插入到台式电脑或笔记本的读卡器后，选择下载的系统镜像，选择MicroSD卡，点击“Flash“按钮，几分钟后工具就会提示您的MicroSD卡已经就绪, 之后将MicroSD卡插入到树莓派，接上USB移动硬盘，插入网线，接通电源，等待几分钟系统启动完毕，您就可以用Lomorage 手机App开始备份照片了。
如果您连接了HDMI，系统启动完成后，会提示没有找到资源，也会显示一个二维码用来绑定Lomorage相框，请先在iOS/Android手机应用上创建用户，然后再扫码绑定Lomorage相框，您可以使用Lomorage手机应用程序上传照片，然后按&quot;r&quot;键重新扫描。如果您想退出到控制台做一些系统配置，可以按&quot;ESC&quot;退出，然后按&quot;Ctrl+Alt+F2&quot;切换到控制台，配置完成后，可以使用命令sudo service supervisor restart来启动Lomorage相框程序。
默认的用户名是&quot;lomoware&rdquo;，密码是&quot;lomorage&quot;
为了更好的性能，建议使用有线网络连接，但如果您想使用WiFi, 您可以登陆树莓派，并使用下面的命令来启用无线连接wifi_switch.sh client wifi-ssid wifi-password，将 &ldquo;wifi-ssid&quot;和&quot;wifi-password&quot;替换为您的无线网络名和密码。如果您的无线网络名称中有中文字符或者空格，就需要用引号，比如wifi_switch.sh client &quot;Lomorage的 无线&quot; mypassword
您有可能会碰到&quot;Wi-Fi is currently blocked by rfkill&quot;的问题，可以执行下面的命令检查一下WiFi是否被禁用:
pi@raspberrypi:~ $ sudo rfkill list all 0: phy0: Wireless LAN Soft blocked: no Hard blocked: no 1: hci0: Bluetooth Soft blocked: yes Hard blocked: no 您可以使用下面的命令来启用WiFi:
sudo rfkill unblock 0 这里“0”是上面Wireless LAN的序号。
启用之后您可以再尝试wifi_switch.sh。
其他安装方法 # 选项一：Docker安装 # 请参考 lomo-docker安装Docker镜像。请使用arm的镜像&quot;lomorage/raspberrypi-lomorage:latest&rdquo;。
选项二：APT安装 # 如果您运行官方的系统，APT是最快捷的安装方式。
1. 添加lomoware源 # sudo apt install -y ca-certificates python3-certifi sudo update-ca-certificates --fresh curl -fsSL https://lomoware.lomorage.com/debian/gpg.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/lomorage-apt-key.gpg &gt; /dev/null 如果您使用trixie:
echo &#34;deb https://lomoware.lomorage.com/debian/trixie trixie main&#34; | sudo tee /etc/apt/sources.list.d/lomoware.list 如果您使用bookworm:
echo &#34;deb https://lomoware.lomorage.com/debian/bookworm bookworm main&#34; | sudo tee /etc/apt/sources.list.d/lomoware.list 如果您使用bullseye:
echo &#34;deb https://lomoware.lomorage.com/debian/bullseye bullseye main&#34; | sudo tee /etc/apt/sources.list.d/lomoware.list 然后运行:
sudo apt update 2. 安装Lomorage # 最小安装需要lomo-vips和lomo-backend，您可以根据自己需要进行选择。
lomo-backend: 必须, &ldquo;Lomorage照片助手&quot;程序
lomo-base: 可选, 系统工具，包括网络配置，开关控制, 磁盘加载, 蓝牙控制台
lomo-vips: 必须, lomo-backend使用的图像处理库
lomo-frame: 可选, 数码相框程序
sudo apt install lomo-base lomo-vips lomo-backend lomo-frame -y 确保当前用户sudo不用密码, 如果不行，可以通过下面的命令添加:
echo &#34;$USER ALL=(ALL:ALL) NOPASSWD: ALL&#34; | sudo tee /etc/sudoers.d/$USER 3. 按需修改运行参数 # 用户可以在&rdquo;/opt/lomorage/etc/environment&quot;设置环境变量来修改某些运行参数。用户可以根据自己实际情况加以调整。
3.1 修改磁盘mount目录 # 如果您不是使用步骤4的usbmount来自动加载磁盘（没有加载到&quot;/media&quot;路径下的子目录），您需要添加&quot;Lomorage照片助手&quot;程序运行参数来指定加载目录。
比如如果您使用PCManFM，那么加载的路径会是&quot;/media/pi&quot;。 要指定加载目录&quot;/media/pi&quot;, 请添加环境变量LOMOD_MOUNT_DIR=/media/pi在/opt/lomorage/etc/environment，比如
echo &#34;LOMOD_MOUNT_DIR=/media/pi&#34; | tee -a /opt/lomorage/etc/environment 请确保您的用户有上面设置的&quot;mount-dir&quot;的读写权限, 另外改参数必须是mount的父目录，比如mount到&quot;/media/pi/disk0&quot;下面，就必须指定为&quot;/media/pi&quot;
另外的方案是cp /lib/systemd/system/lomod.service /etc/systemd/system/lomod.service，然后编辑&quot;/etc/systemd/system/lomod.service&quot;，修改&quot;ExecStart&quot;指定要用的参数(运行/opt/lomorage/bin/lomod -h查看可用的参数)，然后运行sudo systemctl daemon-reload之后，就会使用&quot;/etc/systemd/system/lomod.service&quot;的配置了。 &ldquo;/lib/systemd/system/lomod.service&quot;在升级时会被覆盖。
3.2 HTTP 监听端口 # Lomod缺省监听端口是8000，如果需要自定义，清使用环境变量LOMOD_PORT_HTTP，比如
echo &#34;LOMOD_PORT_HTTP=8888&#34; | tee -a /opt/lomorage/etc/environment 3.3 禁用磁盘监控 # Lomod会监控USB磁盘的加载状态，防止掉盘。如果因为某些原因需要禁用，可以使用环境变量LOMOD_DISABLE_MOUNT_MONITOR控制，比如
echo &#34;LOMOD_DISABLE_MOUNT_MONITOR=1&#34; | tee -a /opt/lomorage/etc/environment 4. 运行 # 重启&quot;Lomorage照片助手&quot;程序:
# 重启lomo-backend sudo systemctl restart lomod # 重启lomo-frame sudo service supervisor restart `}),e.add({id:2,href:"/zh/docs/Highlight/",title:"功能",section:"Docs",content:" 手机照片，轻松下拉备份，是否备份成功一目了然。 支持增量差异上传，不会重复备份。 支持断点续传，再大的视频都不怕。 完美支持动态照片Live Photo和DNG格式，支持所有主流照片视频格式。 原始文件备份，质量无损耗，时间地理位置等信息统统保留。 有相同的照片，照片去重无需存储多次。 相似图片分析，可以方便选择最好的留下。 多台手机平板，登陆同一账号，照片即可访问。 家庭成员不同账号，保护隐私。 不熟悉手机操作的家庭成员（老人、小孩），扫码即可秒登录，无需输入密码。 有小秘密，加密存储。（即将推出） 照片分享，不占手机内存。 备份的照片无需手动下载到本地，也能轻松分享到社交网络。 换手机了照片也能随时访问。 一键批量导出备份照片到手机。（即将推出） 离线智能缓存，手机没网也能看海量照片视频。 按地点，时间，图片文字等智能查找。 历史的今天，让您的照片不再封存在硬盘里。 支持手动整理相册，打标签，让你按自己的方式组织照片。（即将推出） 多重备份，大大降低数据丢失风险。 硬盘照片导入，把繁琐的照片管理工作交给专业的Lomorage。 不限速，不限账号数，硬盘备份数据一目了然，拒绝绑架用户。 硬盘即插即用，无需重新格式化。 "}),e.add({id:3,href:"/zh/docs/Installation/lomorage-client/installation-android/",title:"Andriod",section:"Lomorage客户端",content:` 安装Lomorage安卓手机App # 您可以在安卓手机上安卓Lomorage App，最低支持的安卓系统版本是7.1。
更新信息：（2023/01/08） # 更多请查看 Lomorage Github
下载 # 请 从 Google Play Store 或者本官网下载最新 APK。
欢迎提供反馈，我们会不断更新我们的软件，点击下面的图标下载最新中文版
从GitHub下载 快速使用介绍视频 # 点击去B站观看
点击去Youtube观看
Lomorage 是一款个人私有照片和视频备份工具，它方便的把您的照片和视频备份到Windows PC机或者Apple MAC机，也可以备份到Lomorage 定制的树莓派上。 您需要在Windows 或者 Mac 或者 树莓派上安装 &ldquo;Lomorage照片助手&rdquo;。
安装完Lomorage客户端，可能需要花一两分钟时间导入您的视频和照片。然后在Manage Account界面可以创建账号，登录，下拉备份您的照片和视频，还可以和您的家人进行分享。
App会导入您的照片和视频，并且提示您需要登录 点击右上角的菜单，进入账号管理界面. 在那里，App会自动发现您的"Lomorage照片助手"程序 然后创建账号，登录。 您也可以通过二维码扫描您的"Lomorage照片助手"程序. （如果您用的是Windows或者Mac的"Lomorage照片助手"） 下来开始备份您的照片和视频 可以选择过滤选项来查看您要的照片和视频 在 备份 栏目，你可以长按选中然后分享给您的家人 通过 Members 选项来查看所有的用户 通过 Inbox 来查看您的家人通过Lomorage 系统分享给您的照片和视频 您可以在设置页配置您的远程访问和冗余备份，并且发送反馈 帮不熟悉手机操作的家庭成员登录 # 对于不方便自己输入服务器地址和密码的家庭成员（比如老人、小孩），可以在已经登录的设备上打开设置，选择&quot;Show Sign-In Code&quot;（生成登录二维码）。输入对方的用户名和密码后会生成一个二维码，把手机交给他们扫描，就能直接登录他们自己的账户。二维码里包含了对方的密码，所以只能让他们当面扫描，不要截图或转发。这个页面不会保存任何信息，需要的时候随时可以回来重新生成。
选择需要备份的目录 # 点击右上角菜单，选择“本机文件夹管理”选择你想要备份的目录 更新历史：2021-09-12 # 增加创建用户失败时的比较易理解的提示 `}),e.add({id:4,href:"/zh/docs/Installation/lomorage-service/installation-armbian/",title:"Armbian",section:"Lomorage照片助手",content:` Armbian # 可以有两种安装方式:
Docker安装
构建自己的镜像
Docker安装 # 请参考 lomo-docker安装Docker镜像。请使用arm的镜像&quot;lomorage/raspberrypi-lomorage:latest&quot;。
构建自己的镜像 # 下面的步骤应该对于所有Armbian官方支持的SBC都适用，但如果您发现有问题，请联系我们。
这里有已经编译好的 Orange Pi Zero的 镜像。
Armbian默认的用户名是&quot;lomoware&quot;，密码是&quot;lomorage&quot;。
1. 准备编译环境 # 如果您使用Ubuntu Focal 20.04.x amd64，可以跳过这一步。
下载安装 Vagrant.
安装可以调整存储空间大小的插件:
vagrant plugin install vagrant-disksize 安装git并克隆Armbian仓库: # Clone the project. git clone --depth 1 https://github.com/lomorage/build # Make the Vagrant box available. This might take a while but only needs to be done once. vagrant box add ubuntu/focal64 # If the box gets updated by the folks at HashiCorp, we&#39;ll want to update our copy too. # This only needs done once and a while. vagrant box update 2. 构建镜像 # 启动vagrant: # We have to be in the same directory as the Vagrant file, which is in the build/config/templates directory. cd build/config/templates # Note that you can edit the Vagrant file to specify the number of cpus and amount of memory you want Vagrant to use. # And now we simply let vagrant create our box and bring it up. vagrant up # When the box has been installed we can get access via ssh. # (No need for passwords, Vagrant installs the keys we&#39;ll need.) vagrant ssh 修改&quot;userpatches/config-default.conf&quot;中的board参数，默认值是BOARD=&quot;orangepizero&quot;, 如果不知道board名称，可以使用BOARD=&quot;&quot;，在后面编译的过程中再选择，也可以参考这里的 配置。
构建镜像:
# Let&#39;s get building! cd armbian sudo ./compile.sh 构建成功后的镜像生成在output/images目录。
`}),e.add({id:5,href:"/zh/docs/Installation/",title:"安装",section:"Docs",content:` 安装说明 # 要使用Lomorage，您需要在本地网络运行&quot;Lomorage照片助手&quot;程序，您可以选择在Windows，macOS，Ubuntu，Raspbian, Armbain上运行，可以使用x86或者arm架构的机器。然后您需要去应用程序商店下载手机客户端应用。在运行了&quot;Lomorage照片助手&quot;程序之后，手机客户端会自动发现&quot;Lomorage照片助手&quot;，无需配置，然后您就可以开始备份照片和视频了。
安装Lomorage照片助手 安装Lomorage客户端 设置数码相框(可选) `}),e.add({id:6,href:"/zh/docs/Installation/lomorage-service/installation-ubuntu/",title:"Ubuntu",section:"Lomorage照片助手",content:`您可以使用docker或者APT的方式安装。
Docker安装 # 请参考 lomo-docker安装Docker镜像。您可以根据你的CPU架构选择使用arm的镜像&quot;lomorage/raspberrypi-lomorage:latest&quot; ，或者amd64的镜像&quot;lomorage/amd64-lomorage:latest&quot;。
APT安装 # 当前我们只支持x86/AMD64 Ubuntu 18.04.5 LTS (Bionic Beaver)、Ubuntu 20.04.1 LTS (Focal Fossa)、Ubuntu 22.04 LTS (Jammy Jellyfish)和Ubuntu 24.04 LTS (Noble Numbat)。
1. 安装lomoware源 # sudo apt install -y ca-certificates python-certifi python3-certifi sudo update-ca-certificates --fresh curl -fsSL https://lomoware.lomorage.com/debian/gpg.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/lomorage-apt-key.gpg &gt; /dev/null 如果您使用Bionic:
echo &#34;deb [arch=amd64] https://lomoware.lomorage.com/debian/bionic bionic main&#34; | sudo tee /etc/apt/sources.list.d/lomoware.list 如果您使用focal:
echo &#34;deb [arch=amd64] https://lomoware.lomorage.com/debian/focal focal main&#34; | sudo tee /etc/apt/sources.list.d/lomoware.list 如果您使用jammy:
echo &#34;deb [arch=amd64] https://lomoware.lomorage.com/debian/jammy jammy main&#34; | sudo tee /etc/apt/sources.list.d/lomoware.list 如果您使用noble:
echo &#34;deb [arch=amd64] https://lomoware.lomorage.com/debian/noble noble main&#34; | sudo tee /etc/apt/sources.list.d/lomoware.list 然后运行:
sudo apt update 2. 安装Lomorage # 您至少需要安装lomo-vips,lomo-base-lite和lomo-backend。
lomo-backend: 必须, &ldquo;Lomorage照片助手&quot;程序
lomo-base-lite: 可选, 硬盘自动加载和休眠
lomo-vips: 必须, lomo-backend使用的图像处理库
sudo apt install lomo-base-lite lomo-vips lomo-backend -y 确保当前用户sudo不用密码, 如果不行，可以通过下面的命令添加:
echo &#34;$USER ALL=(ALL:ALL) NOPASSWD: ALL&#34; | sudo tee /etc/sudoers.d/$USER 3. 按需修改运行参数 # 用户可以在&rdquo;/opt/lomorage/etc/environment&quot;设置环境变量来修改某些运行参数。用户可以根据自己实际情况加以调整。
3.1 修改磁盘mount目录 # 如果您不是使用步骤4的usbmount来自动加载磁盘（没有加载到&quot;/media&quot;路径下的子目录），您需要添加&quot;Lomorage照片助手&quot;程序运行参数来指定加载目录。
比如如果您使用PCManFM，那么加载的路径会是&quot;/media/pi&quot;。 要指定加载目录&quot;/media/pi&quot;, 请添加环境变量LOMOD_MOUNT_DIR=/media/pi在/opt/lomorage/etc/environment，比如
echo &#34;LOMOD_MOUNT_DIR=/media/pi&#34; | tee -a /opt/lomorage/etc/environment 请确保您的用户有上面设置的&quot;mount-dir&quot;的读写权限, 另外改参数必须是mount的父目录，比如mount到&quot;/media/pi/disk0&quot;下面，就必须指定为&quot;/media/pi&quot;
3.2 HTTP 监听端口 # Lomod缺省监听端口是8000，如果需要自定义，清使用环境变量LOMOD_PORT_HTTP，比如
echo &#34;LOMOD_PORT_HTTP=8888&#34; | tee -a /opt/lomorage/etc/environment 另外的方案是cp /lib/systemd/system/lomod.service /etc/systemd/system/lomod.service，然后编辑&quot;/etc/systemd/system/lomod.service&quot;，修改&quot;ExecStart&quot;指定要用的参数(运行/opt/lomorage/bin/lomod -h查看可用的参数)，然后运行sudo systemctl daemon-reload之后，就会使用&quot;/etc/systemd/system/lomod.service&quot;的配置了。 &ldquo;/lib/systemd/system/lomod.service&quot;在升级时会被覆盖。
4. 运行 # 重启&quot;Lomorage照片助手&quot;程序:
# 重启lomo-backend sudo systemctl restart lomod # 重启lomo-frame sudo service supervisor restart `}),e.add({id:7,href:"/zh/docs/Installation/lomorage-client/installation-web/",title:"Web",section:"Lomorage客户端",content:` 安装Lomorage网页客户端 # 您可以使用Lomorage网页客户端来上传电脑里面的照片和视频，并且可以使用图库来浏览已经备份的照片和视频。您还可以打开收件箱，查看其他家庭成员分享给您的照片和视频。
如果您使用MacOS版本的“Lomorage照片助手”，您可以点击“Lomorage照片助手”应用的“网页浏览”菜单打开网页客户端。
如果您使用树莓派版本的&quot;Lomorage照片助手&quot;程序, 您可以在电脑的浏览器上访问&quot; http://raspberrypi-lomorage.local:8000&quot;，打开Lomorage网页客户端。
登陆用户名和密码是您用手机Lomorage APP生成的用户名和密码
`}),e.add({id:8,href:"/zh/docs/Usage/",title:"使用说明",section:"Docs",content:` 使用说明 # 本章主要介绍&quot;Lomorage照片助手&quot;和命令行软件的一些使用说明，另外还包括其他的一些工具，以及和第三方服务集成的一些说明
命令行工具 如何从公网访问 `}),e.add({id:9,href:"/zh/docs/Installation/lomorage-service/installation-win/",title:"Windows",section:"Lomorage照片助手",content:` 在Windows上安装&quot;Lomorage照片助手&quot; # 1. 安装 # 打开 PowerShell（不需要以管理员身份运行），粘贴执行：
irm https://lomosw.lomorage.com/windows/install.ps1 | iex 这会自动下载 lomod.exe 以及它需要的所有组件（vips、exiftool、ffmpeg），安装到你自己的用户目录下并启动——没有安装向导窗口，不需要管理员权限，也不需要重启电脑。
如果你在国内，GitHub 下载比较慢或者失败，可以先设置这个环境变量，让下载走加速代理：
$env:LOMOD_CHINA=1; irm https://lomosw.lomorage.com/windows/install.ps1 | iex 如果第一次启动时 Windows 弹出防火墙提示（这样你的手机才能在局域网内访问它），请选择 专用网络（Private networks），点击 允许访问。
2. 数据目录 # 默认情况下，你的照片和视频会存储在你自己用户目录下的 Pictures\\Lomorage 文件夹里——不需要额外配置就能直接使用。
如果你想用别的磁盘或文件夹（比如外接硬盘），不要直接用 irm ... | iex 这种一行命令，而是先把脚本下载下来，再带上 -DataDir 参数运行：
irm https://lomosw.lomorage.com/windows/install.ps1 -OutFile install.ps1 ./install.ps1 -DataDir &#34;D:\\Lomorage&#34; 以后想把已安装的实例改到新目录，也是用同样的方式重新运行安装脚本——可以随时安全地重复运行。
3. 打开 Lomorage # 安装完成后，&ldquo;开始&quot;菜单和系统托盘（屏幕右下角）都会出现一个 Lomorage 图标——双击任意一个都可以在浏览器里打开网页客户端。
在托盘图标上右键，可以看到 Start / Stop / Restart（启动/停止/重启），或者选择 Quit 完全退出。如果不小心退出了，去&quot;开始&quot;菜单搜索 Lomorage 就能重新打开，不需要重新安装。
4. 从手机或其他电脑访问 # 找到这台电脑的 IP 地址，然后在同一网络下的手机或其他设备浏览器里打开 http://这台电脑的IP:8000。
5. 自动更新 # Lomorage 每天会在后台自动检查并安装新版本，不需要任何操作。如果你想立刻更新，直接重新执行第 1 步的安装命令即可——可以安全地重复运行，不会影响你的照片。
6. 卸载 # 目前还没有一键卸载工具，如果需要完全移除：
在托盘图标上右键，选择 Quit。 删除&quot;开始&quot;菜单里的 Lomorage.lnk 快捷方式，以及 shell:startup（在文件资源管理器地址栏粘贴这个可以直接跳转过去）里的那个。 打开&quot;任务计划程序&rdquo;（Task Scheduler），如果有 LomorageUpdate 任务，删除它。 删除安装目录 %LOCALAPPDATA%\\Lomorage\\lomod。 第 2 步里数据目录中的照片不会受以上任何步骤影响。
Enjoy!
联系我们: support@lomorage.com
关于苹果手机的 HEIC 照片 / HEVC 视频： Lomorage 网页客户端在你查看时会自动把它们转换成浏览器能直接播放的格式，光是这一点不需要额外安装任何东西。但原始文件在磁盘上——包括数据目录里的，以及你从 Lomorage 下载下来（而不是在网页里查看）的——仍然是 HEIC/HEVC 格式。如果你想让 Windows 资源管理器/照片应用（不管是这台电脑还是其他电脑）能正常显示或播放这些原始文件，安装 &ldquo; HEIF Image Extensions&rdquo; 和 &ldquo; HEVC Video Extensions&rdquo; 即可。 7. 还有问题，扫码加微信哦 # `}),e.add({id:10,href:"/zh/docs/Installation/lomorage-service/installation-osx/",title:"OSX",section:"Lomorage照片助手",content:` 在MacOS上安装&quot;Lomorage照片助手&quot;程序 # 1. 点击下面的链接安装&quot;Lomorage照片助手&quot;程序。
macOS 2. 双击&quot;LomoAgent.dmg&quot;开始安装，参考下面步骤完成安装。
3. 运行应用程序“Lomorage照片助手”，如果有防火墙提示，请允许“Lomorage照片助手”访问网络。
4. 程序启动后，您需要设置数据目录才能正常使用，数据目录用来存储您的手机上传的照片视频。除此之前您也可以再多选择一个冗余备份目录，系统会每天定时进行冗余备份。
5. 高级选项：命令行安装 # 喜欢用命令行？这将只安装 lomod 后端服务（无图形界面）到你的用户目录下，无需管理员权限。打开&quot;终端&quot;并运行（下载安装包时会走 gfw.lomorage.com 加速代理）：
curl -fsSL https://lomosw.lomorage.com/mac/install.sh | LOMOD_CHINA=1 bash `}),e.add({id:11,href:"/zh/docs/Installation/lomorage-service/installation-docker/",title:"Docker",section:"Lomorage照片助手",content:" Docker安装 # 请参考 lomo-docker安装Docker镜像。您可以根据你的CPU架构选择使用arm的镜像&quot;lomorage/raspberrypi-lomorage:latest&quot;，或者amd64的镜像&quot;lomorage/amd64-lomorage:latest&quot;\n下面是在Raspberry Pi OS (64-bit)桌面版上安装的例子.\ndocker-compose.yml:\nversion: &#34;3.9&#34; services: lomo: image: ${IMG} container_name: lomorage privileged: true environment: - LOMOD_DISABLE_MOUNT_MONITOR=1 cap_add: - ALL volumes: - ${HOME_MEDIA_DIR}:/media/WD_36AA8D42AA8D001B - ${HOME_MEDIA_BAKUP_DIR}:/media/WD_90C27F73C27F5C82 - ${HOME_LOMO_DIR}:/lomo - /dev:/dev ports: - ${LOMOD_PORT}:${LOMOD_PORT} - 8004:8004 command: $LOMOD_PORT watchtower: image: ${AUTO_UPDATE_IMG} container_name: watchtower restart: always volumes: - /var/run/docker.sock:/var/run/docker.sock command: lomorage --cleanup .env文件:\nIMG=lomorage/arm64-lomorage:latest AUTO_UPDATE_IMG=containrrr/watchtower:arm64v8-latest # IMG=lomorage/amd64-lomorage:latest # AUTO_UPDATE_IMG=containrrr/watchtower:amd64-latest LOMOD_PORT=8000 # change the directories in your env HOME_MEDIA_DIR=&#34;/media/jeromy/My Passport1&#34; HOME_MEDIA_BAKUP_DIR=&#34;/media/jeromy/My Passport&#34; HOME_LOMO_DIR=&#34;/home/jeromy/lomo&#34; # mdns works in vlan, change vlan settings in your env NETWORK_TYPE=ipvlan # macvlan NETWORK_INF=eth0 SUBNET=192.168.1.0/24 GATEWAY=192.168.1.1 VLAN_ADDR=192.168.1.79 启动服务docker-compose up -d，然后通过手机APP创建用户和密码登录。\n"}),e.add({id:12,href:"/zh/docs/Installation/lomorage-service/installation-openwrt/",title:"Openwrt",section:"Lomorage照片助手",content:` Openwrt安装 # Lomorage的opkg包安装依赖Entware软件仓库中的其他包(比如ffmpeg exif-tools)。
当前在Beta测试中，如果您碰到什么问题请联系我们。
快速开始 # 1. 安装Entware # 请参考 这里的步骤来安装Entware到目标机上。
您可以使用cat /proc/cpuinfo命令来检查系统架构:
root@OpenWrt:/mnt/sda1# cat /proc/cpuinfo system type	: Atheros AR9344 rev 2 machine	: Western Digital My Net N750 processor	: 0 cpu model	: MIPS 74Kc V4.12 BogoMIPS	: 278.93 wait instruction	: yes microsecond timers	: yes tlb_entries	: 32 extra interrupt vector	: yes hardware watchpoint	: yes, count: 4, address/irw mask: [0x0ffc, 0x0ffc, 0x0ffb, 0x0ffb] isa	: mips1 mips2 mips32r1 mips32r2 ASEs implemented	: mips16 dsp dsp2 Options implemented	: tlb 4kex 4k_cache prefetch mcheck ejtag llsc dc_aliases perf_cntr_intr_bit nan_legacy nan_2008 perf shadow register sets	: 1 kscratch registers	: 0 package	: 0 core	: 0 VCED exceptions	: not available VCEI exceptions	: not available 如果是MIPS，可以使用 lscpu来查看字节序，mips是big-endian架构,. mipsel是little-endian架构。
root@OpenWrt:/mnt/sda1# lscpu | grep &#34;Byte Order&#34; Byte Order: Big Endian 然后您可以使用uname -a 查看Linux版本号:
root@OpenWrt:/mnt/sda1# uname -a Linux OpenWrt 4.14.221 #0 Mon Feb 15 15:22:37 2021 mips GNU/Linux 通常您需要加载USB驱动器，并将包安装到上面，参考:
https://openwrt.org/docs/guide-user/storage/usb-drives-quickstart#procedure https://www.jianshu.com/p/4061eeaccd13 确保修改了&quot;/etc/profile&quot;，添加/opt/bin/go/bin:/opt/bin到PATH，添加/opt/lib/到LD_LIBRARY_PATH
Entware安装好了后，可以从Entware安装下面的依赖和工具:
root@OpenWrt:~# opkg install coreutils-stat perl-image-exiftool ffmpeg ffprobe lsblk 2. 安装Lomorage # 现在支持的系统平台如下:
aarch64-3.10 # arm64, linux kernel ver &gt;= 3.10 armv7-3.2 # armv7, linux kernel ver &gt;=3.2 mips-3.4 # mips big-endian, linux kernel ver &gt;=3.2 mipsel-3.4 # mips little-endian, linux kernel ver &gt;=3.2 添加src/gz lomorage https://lomostaging.lomorage.com/opkg/[architecture]到/opt/etc/opkg.conf，将[architecture]替换为你的系统架构，比如如果是mips big-endian, linux kernel ver &gt;=3.2, 使用src/gz lomorage https://lomostaging.lomorage.com/opkg/mips-3.4。必须将其放置到 &ldquo;entware&rdquo; 条目的下面，因为entware中有些需要的包没有打开需要的编译选项，需要使用Lomorage源中的包。
root@OpenWrt:~# cat /opt/etc/opkg.conf src/gz entware http://bin.entware.net/mipssf-k3.4 src/gz lomorage https://lomostaging.lomorage.com/opkg/mips-3.4 dest root / lists_dir ext /opt/var/opkg-lists arch all 100 arch mips-3x 150 arch mips-3.4 160 然后您可以安装&quot;lomo-backend&quot;，所有的依赖应该都能自动安装:
root@OpenWrt:/mnt/sda1/# opkg update --no-check-certificate root@OpenWrt:/mnt/sda1/# opkg install lomo-backend --no-check-certificate &ldquo;lomod&quot;安装完成后会自动启动，默认的加载目录是&rdquo;/mnt&quot;，端口号&quot;8000&quot;，你也可以使用下面的命令控制:
root@OpenWrt:/mnt/sda1# /opt/etc/init.d/lomod Usage: /opt/etc/init.d/lomod {start|stop|restart} 需要注意的是对于&quot;arm&quot;架构，会有两个版本: &ldquo;hf&rdquo; and &ldquo;nohf&rdquo;, &ldquo;hf&quot;是hard float的缩写，可以通过grep &quot;fpu&quot; /proc/cpuinfo来查看CPU是否支持hard float，如果命令输出显示fpu : yes那就是支持. 如果不支持hard float，您需要安装nohf版本的包:
root@OpenWrt:/mnt/sda1/# opkg install lomo-backend_nohf --no-check-certificate 接下来您可以使用cron job来每天4:00 am自动更新lomo-backend:
root@OpenWrt:~# crontab -e 添加下面的内容:
0 4 * * * opkg update --no-check-certificate &amp;&amp; opkg install lomo-backend --no-check-certificate `}),e.add({id:13,href:"/zh/docs/Installation/lomorage-service/installation-unraid/",title:"Unraid",section:"Lomorage照片助手",content:` 在Unraid App Store里面选择并安装Lomorage # 输入关键字lomorage，点击搜索 当您发现lomorage应用以后，您可以点击info图标，从而了解更多有关lomorage在unraid论坛里面的支持
点击安装，当下图出现的时候，说明安装已经成功 Unraid 模版修改 # 如果您对缺省的模版需要修改，请参考以下说明：
Network: 缺省值是host模式，这主要是因为手机客户端需要试用MDNS来自动发现&quot;Lomorage照片助手&quot;，如果您愿意手动配置手机客户端，可以将此处设置为bridge模式 ExtraParams: 缺省值是99:100. 这个参数需要和下面的User 配置一起使用。这个值主要是为了保证上传的图片和视频可以有正确的Linux用户名和组名，这样的话用户就可以利用unraid的共享服务，从电脑端远程访问图片和视频.其中，99 是nobody用户在linux下面的ID, 100 是nobody组在linux下面的ID. 用户可以根据自己需要定制这些值. PostArgs: 缺省值是8000, 是 lomorage 后端的监听端口. Config MediaDir: 这个目录是上传的媒体存储目录，缺省值是/mnt/user/ AppDir: 这个目录是lomorage后端配置文件，数据库文件和日志文件的存储目录，缺省值是/mnt/user/appdata User: 这个文件是将实际的用户id信息传入到后端，从而保证后台可以生成正确的用户名. Nginx Proxy Manager 集成 # Nginx Proxy Manager 是一个流行的免费反向代理服务器，可以用来把内网的服务映射到公网internet上面。unraid社区已经有了官方支持的app，用户可以自行安装.
登陆之后，点击 Add Proxy Host, 然后设置自己的域名和转发ip，转发端口是上面设置的监听端口 点击 SSL，配置证书域名 点击Save, 新添加的proxy host会显示在列表中 `}),e.add({id:14,href:"/zh/docs/Installation/lomorage-service/installation-synology/",title:"群晖",section:"Lomorage照片助手",content:` 群晖 # 1. 从docker镜像仓库里面搜索lomorage # 找到lomorage镜像文件后，单击Download图标，下载docker文件。注意lomorage有arm和amd64的不同版本，请根据您的实际情况，下载对应的docker文件
2. 启动lomorage镜像 # 在Image页面，选择已经下载的lomorage container，点击Launch图标
3. 高级设置 # 设置container名字，然后点击Advanced Setting图标
3.1. 勾选自动重启 # 3.2. 设置Volume # 在volume页面，点击Add Folder，添加lomorage文件夹和两个子文件夹:
data: 这个文件夹主要用来存储图片和视频文件, 需要mount到container内部/media目录 app: 这个文件夹主要用来存储应用相关的log，配置文件等等，需要mount到container内部/lomo 3.3. 设置端口 # 在端口设置页面，添加tcp端口映射8000 -&gt; 8000
4. Done # 点击 Apply 按钮，lomorage container应当开始运行，你可以从手机端访问&quot;Lomorage照片助手&quot;
5. 高级MAC vlan docker 网络 # 上述步骤使用缺省的docker bridge网络，用户需要在手机端手动输入ip和端口。如果用户对ssh和docker命令有些了解，可以通过添加docker mac vlan网络的方式来启用MDNS功能，这样手机端就可以自动发现&quot;Lomorage照片助手&quot;。首先需要确认你知道自己的子网，网关ip，网络接口名字，lomorage container分配的新的静态ip，以下截图假设
subnet: 192.168.1.0/24 gateway: 192.168.1.1 interface name: eth0 new static ip: 192.168.1.100 使用SSH登陆群晖, 运行 docker network create -d macvlan --subnet=192.168.1.0/24 --gateway=192.168.1.1 --ip-range=192.168.1.100/32 -o parent=eth0 lomorage生成新的网络.
在群晖 docker的网页中，从侧边栏中点击Network，应该可以看到新的lomorage网络选项
停止运行的lomorage container，点击Edit按钮，在Network页面，添加新的lomorage，并且删除旧的bridge网络，点击Apply，重新启动container，现在手机端应该可以自动发现后端应用了
`}),e.add({id:15,href:"/zh/docs/Installation/lomorage-service/installation-fedora/",title:"Fedora",section:"Lomorage照片助手",content:` 在Fedora上安装&quot;Lomorage照片助手&quot; # 当前我们只支持x86/AMD64 Fedora（当前最新稳定版）。
1. 启用 RPM Fusion # ffmpeg（视频处理需要）由于授权原因不在Fedora的默认源中，需要先启用 RPM Fusion：
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm 2. 安装lomoware源 # sudo tee /etc/yum.repos.d/lomoware.repo &gt; /dev/null &lt;&lt;&#39;EOF&#39; [lomoware-fedora] name=Lomoware Fedora Repository baseurl=https://lomoware.lomorage.com/rpm/fedora enabled=1 gpgcheck=1 gpgkey=https://lomoware.lomorage.com/rpm/fedora/repodata/repomd.xml.key EOF 3. 安装Lomorage # 和Debian/Ubuntu不同，Fedora下lomo-vips不是单独的包 &ndash; Fedora自带的源里 直接有vips，安装时会自动拉取。
sudo dnf install lomo-backend -y 确保当前用户sudo不用密码, 如果不行，可以通过下面的命令添加:
echo &#34;$USER ALL=(ALL:ALL) NOPASSWD: ALL&#34; | sudo tee /etc/sudoers.d/$USER 4. 按需修改运行参数 # 用户可以在&quot;/opt/lomorage/etc/environment&quot;设置环境变量来修改某些运行参数。用户可以根据自己实际情况加以调整。
4.1 修改磁盘mount目录 # 如果USB磁盘没有加载到&quot;/media&quot;路径下，您需要指定加载目录。
要指定加载目录&quot;/media/pi&quot;, 请添加环境变量LOMOD_MOUNT_DIR=/media/pi在/opt/lomorage/etc/environment，比如
echo &#34;LOMOD_MOUNT_DIR=/media/pi&#34; | tee -a /opt/lomorage/etc/environment 请确保您的用户有上面设置的&quot;mount-dir&quot;的读写权限, 另外改参数必须是mount的父目录，比如mount到&quot;/media/pi/disk0&quot;下面，就必须指定为&quot;/media/pi&quot;
4.2 HTTP 监听端口 # Lomod缺省监听端口是8000，如果需要自定义，清使用环境变量LOMOD_PORT_HTTP，比如
echo &#34;LOMOD_PORT_HTTP=8888&#34; | tee -a /opt/lomorage/etc/environment 另外的方案是cp /lib/systemd/system/lomod.service /etc/systemd/system/lomod.service，然后编辑&quot;/etc/systemd/system/lomod.service&quot;，修改&quot;ExecStart&quot;指定要用的参数(运行/opt/lomorage/bin/lomod -h查看可用的参数)，然后运行sudo systemctl daemon-reload之后，就会使用&quot;/etc/systemd/system/lomod.service&quot;的配置了。 &ldquo;/lib/systemd/system/lomod.service&quot;在升级时会被覆盖。
5. 运行 # 重启&quot;Lomorage照片助手&quot;程序:
sudo systemctl restart lomod `}),e.add({id:16,href:"/zh/docs/Installation/lomorage-service/installation-rocky9/",title:"Rocky Linux 9",section:"Lomorage照片助手",content:` 在Rocky Linux 9上安装&quot;Lomorage照片助手&quot; # 当前我们只支持x86/AMD64 Rocky Linux 9（以及包格式相同的RHEL/AlmaLinux 9）。
1. 启用 EPEL 和 RPM Fusion # perl-Image-ExifTool需要 EPEL，ffmpeg（视频处理需要）需要 RPM Fusion，两者都不在默认源中：
sudo dnf install epel-release -y sudo dnf install https://download1.rpmfusion.org/free/el/rpmfusion-free-release-9.noarch.rpm -y 2. 安装lomoware源 # sudo tee /etc/yum.repos.d/lomoware.repo &gt; /dev/null &lt;&lt;&#39;EOF&#39; [lomoware-rocky9] name=Lomoware Rocky Linux 9 Repository baseurl=https://lomoware.lomorage.com/rpm/rocky9 enabled=1 gpgcheck=1 gpgkey=https://lomoware.lomorage.com/rpm/rocky9/repodata/repomd.xml.key EOF 3. 安装Lomorage # 和Fedora不同，Rocky 9的默认源里完全没有vips，所以这里需要用从源码编译的 lomo-vips，和Debian/Ubuntu的情况一样。
sudo dnf install lomo-vips lomo-backend -y 确保当前用户sudo不用密码, 如果不行，可以通过下面的命令添加:
echo &#34;$USER ALL=(ALL:ALL) NOPASSWD: ALL&#34; | sudo tee /etc/sudoers.d/$USER 4. 按需修改运行参数 # 用户可以在&quot;/opt/lomorage/etc/environment&quot;设置环境变量来修改某些运行参数。用户可以根据自己实际情况加以调整。
4.1 修改磁盘mount目录 # 如果USB磁盘没有加载到&quot;/media&quot;路径下，您需要指定加载目录。
要指定加载目录&quot;/media/pi&quot;, 请添加环境变量LOMOD_MOUNT_DIR=/media/pi在/opt/lomorage/etc/environment，比如
echo &#34;LOMOD_MOUNT_DIR=/media/pi&#34; | tee -a /opt/lomorage/etc/environment 请确保您的用户有上面设置的&quot;mount-dir&quot;的读写权限, 另外改参数必须是mount的父目录，比如mount到&quot;/media/pi/disk0&quot;下面，就必须指定为&quot;/media/pi&quot;
4.2 HTTP 监听端口 # Lomod缺省监听端口是8000，如果需要自定义，清使用环境变量LOMOD_PORT_HTTP，比如
echo &#34;LOMOD_PORT_HTTP=8888&#34; | tee -a /opt/lomorage/etc/environment 另外的方案是cp /lib/systemd/system/lomod.service /etc/systemd/system/lomod.service，然后编辑&quot;/etc/systemd/system/lomod.service&quot;，修改&quot;ExecStart&quot;指定要用的参数(运行/opt/lomorage/bin/lomod -h查看可用的参数)，然后运行sudo systemctl daemon-reload之后，就会使用&quot;/etc/systemd/system/lomod.service&quot;的配置了。 &ldquo;/lib/systemd/system/lomod.service&quot;在升级时会被覆盖。
5. 运行 # 重启&quot;Lomorage照片助手&quot;程序:
sudo systemctl restart lomod `}),e.add({id:17,href:"/zh/docs/Installation/lomorage-service/installation-opensuse/",title:"openSUSE Leap",section:"Lomorage照片助手",content:` 在openSUSE Leap上安装&quot;Lomorage照片助手&quot; # 当前我们只支持x86/AMD64 openSUSE Leap（当前发行版）。
1. 安装lomoware源 # sudo zypper addrepo --refresh https://lomoware.lomorage.com/rpm/opensuse/lomoware.repo sudo zypper --gpg-auto-import-keys refresh 2. 安装Lomorage # 和Rocky Linux类似，openSUSE Leap的默认源里没有可用版本的vips，所以这里 也需要用从源码编译的lomo-vips，和Debian/Ubuntu/Rocky的情况一样。
sudo zypper install lomo-vips lomo-backend 确保当前用户sudo不用密码, 如果不行，可以通过下面的命令添加:
echo &#34;$USER ALL=(ALL:ALL) NOPASSWD: ALL&#34; | sudo tee /etc/sudoers.d/$USER 3. 按需修改运行参数 # 用户可以在&quot;/opt/lomorage/etc/environment&quot;设置环境变量来修改某些运行参数。用户可以根据自己实际情况加以调整。
3.1 修改磁盘mount目录 # 如果USB磁盘没有加载到&quot;/media&quot;路径下，您需要指定加载目录。
要指定加载目录&quot;/media/pi&quot;, 请添加环境变量LOMOD_MOUNT_DIR=/media/pi在/opt/lomorage/etc/environment，比如
echo &#34;LOMOD_MOUNT_DIR=/media/pi&#34; | tee -a /opt/lomorage/etc/environment 请确保您的用户有上面设置的&quot;mount-dir&quot;的读写权限, 另外改参数必须是mount的父目录，比如mount到&quot;/media/pi/disk0&quot;下面，就必须指定为&quot;/media/pi&quot;
3.2 HTTP 监听端口 # Lomod缺省监听端口是8000，如果需要自定义，清使用环境变量LOMOD_PORT_HTTP，比如
echo &#34;LOMOD_PORT_HTTP=8888&#34; | tee -a /opt/lomorage/etc/environment 另外的方案是cp /lib/systemd/system/lomod.service /etc/systemd/system/lomod.service，然后编辑&quot;/etc/systemd/system/lomod.service&quot;，修改&quot;ExecStart&quot;指定要用的参数(运行/opt/lomorage/bin/lomod -h查看可用的参数)，然后运行sudo systemctl daemon-reload之后，就会使用&quot;/etc/systemd/system/lomod.service&quot;的配置了。 &ldquo;/lib/systemd/system/lomod.service&quot;在升级时会被覆盖。
4. 运行 # 重启&quot;Lomorage照片助手&quot;程序:
sudo systemctl restart lomod `}),e.add({id:18,href:"/zh/docs/Installation/lomorage-service/",title:"Lomorage照片助手",section:"安装",content:` Lomorage照片助手 # 第一步就是安装&quot;Lomorage照片助手&quot;程序。您可以根据自己的喜好和需求来选择不同的平台安装&quot;Lomorage照片助手&quot;程序。Windows或macOS上运行&quot;Lomorage照片助手&quot;程序可以提供比树莓派上更好的性能，上传和下载的速度会更快，但没树莓派节约能源，7x24小时运行，一年下来电费不会超过30元。
Windows &nbsp; MacOS &nbsp; Raspbian &nbsp; Docker &nbsp; Armbian &nbsp; Ubuntu &nbsp; Unraid &nbsp; Openwrt `}),e.add({id:19,href:"/zh/docs/Installation/lomorage-client/",title:"Lomorage客户端",section:"安装",content:` Lomorage客户端 # 在运行了&quot;Lomorage照片助手&quot;程序后，您可以下载手机客户端，当前支持iPhone或者iPad。
您也可以使用Web版本来上传电脑中已有的照片和视频，也可以在电脑上浏览已经备份的照片和视频。
&nbsp; `}),e.add({id:20,href:"/zh/docs/Usage/lomorage-client/",title:"命令行工具",section:"使用说明",content:" 命令行工具 # 命令行工具可以帮助高级用户做更多的控制使用，缺省安装目录是/opt/lomorage/bin/lomoc\n重置用户的主目录和备份目录 # 当新用户通过手机创建成功以后，如果需要更改主目录或者备份目录，用户可以通过lomoc import的方式重置这些目录。重置前，请先把该用户已有的主目录和备份目录里面的所有内容拷贝到新的目录下。举例来说，如果新目录是/media/newdisk，有两个用户alice和bob需要重置，新目录的树结构应该是如下图所示\n/media/newdisk/ |-- alice | `-- Photos | |-- master | | |-- 2003 | | | |-- 01 | | | | `-- 17 | | | | `-- 20030117_4.jpg | | | `-- 11 | | | |-- 01 | | | | |-- 20031101_2.jpg | | | | `-- 20031101_3.jpg | | | `-- 23 | | | |-- 20031123_1.jpg | | | |-- 20031123_11.webp | | | |-- 20031123_12.dng | | | `-- 20031123_13.heic | | |-- 2004 | | | `-- 01 | | | `-- 21 | | | `-- 20040121_5.jpg | | `-- 2013 | | |-- 07 | | | `-- 28 | | | `-- 20130728_7.png `-- bob `-- Photos |-- master | `-- 2013 | |-- 08 | | `-- 08 | | `-- 20130808_6.mp4 | `-- 11 | `-- 23 | |-- 20131123_10.zip | |-- 20131123_10_image.heic | |-- 20131123_8.zip | |-- 20131123_8_image.jpg | `-- 20131123_9.heic 注意:\n如果输入命令时指定用户名，则只会改变指定用户的主目录或者备份目录；如果没有指定用户，就会更新所有用户的主目录或者备份目录 缺省情况下，用户数据库位于/opt/lomorage/var/assets.db。如果安装过程中有更改，请使用--db选项来指定实际数据库位置 $ /opt/lomorage/bin/lomoc reset home-dir -h NAME: lomoc reset home-dir - reset users&#39; home directory in DB, and input dir must be media dir. If username is not specified, it will reset all users&#39; home directory USAGE: lomoc reset home-dir [command options] [new media dir] ([user name]) OPTIONS: --db value db filename with full path (default: &#34;/opt/lomorage/var/assets.db&#34;) $ /opt/lomorage/bin/lomoc reset backup-dir -h NAME: lomoc reset backup-dir - reset users&#39; backup directory in DB, and input dir must be media backup dir. If username is not specified, it will reset all users&#39; backup directory USAGE: lomoc reset backup-dir [command options] [new backup dir] ([user name]) OPTIONS: --db value db filename with full path (default: &#34;/opt/lomorage/var/assets.db&#34;) 从已有目录中导入媒体文件 # 如果用户有一些媒体文件存储在已有的USB硬盘或者本地磁盘，或者远程mount的磁盘，并且希望可以直接导入到本系统里面，除了使用importer tool，也可以使用lomoc来完成，这样可以避免额外的网络流量。缺省情况下，lomoc会删除旧文件，移动到新目录下，但是如果用户指定--no-move选项，则旧文件会仍然保留在已有的目录中，&ldquo;Lomorage照片助手&quot;不会做任何操作。所有的导入日志存储在/opt/lomorage/var/log/import_[import directory].log里面。\n需要注意的是import导入会根据目录结构自动的创建相册\n$ /opt/lomorage/bin/lomoc import -h NAME: lomoc import - Import all photos from given directory into lomo backend with given username and password USAGE: lomoc import [command options] [username] [password] [directory] OPTIONS: --port value, -p value (default: 8000) --no-move, -n not moving original photos/videos, and only insert record in db --no-video, --nv not scan video files. This is to speed up the first import process 需要注意事项:\n缺省情况下，lomod在端口8000监听，如果用户改变了监听端口，需要设置--port来指定新的监听端口`。 缺省情况下，导入会删除旧文件，移动到新目录下，但是如果用户指定--no-move选项，则旧文件会仍然保留在已有的目录中，&ldquo;Lomorage照片助手&quot;不会做任何操作。 缺省情况下，后台会导入图片和视频文件，由于视频文件的缩略图生成比较耗时，用户可以选择--no-video选项来忽略视频文件导入。由于每次导入后台会检查文件SHA，所以用户可以在第一次导入成功以后，再一次扫描并且导入视频文件。 导入日志范例:\n$ /opt/lomorage/bin/lomoc import alice password /media/STEC_838C-1111/test/video -m Login localhost successfully import photos/videos from /media/STEC_838C-1111/test please check import log /opt/lomorage/var/log/import_media_STEC_838C-1111_test.log $ cat /opt/lomorage/var/log/import_media_STEC_838C-1111_test.log start import /media/STEC_838C-1111/test/img/11_2014_01_21.webp finish import /media/STEC_838C-1111/test/img/11_2014_01_21.webp to /media/STEC_838C-1111/alice/Photos/master/2021/09/20/20210920_9391.webp start import /media/STEC_838C-1111/test/img/12_2014_01_21.heic finish import /media/STEC_838C-1111/test/img/12_2014_01_21.heic to /media/STEC_838C-1111/alice/Photos/master/2021/09/20/20210920_9392.heic start import /media/STEC_838C-1111/test/img/14_2017_09_13.heic finish import /media/STEC_838C-1111/test/img/14_2017_09_13.heic to /media/STEC_838C-1111/alice/Photos/master/2017/09/13/20170913_9393.heic start import /media/STEC_838C-1111/test/img/1_2003_01_17.jpg finish import /media/STEC_838C-1111/test/img/1_2003_01_17.jpg to /media/STEC_838C-1111/alice/Photos/master/2003/01/17/20030117_9394.jpg start import /media/STEC_838C-1111/test/img/3_2003_11_01.jpg finish import /media/STEC_838C-1111/test/img/3_2003_11_01.jpg to /media/STEC_838C-1111/alice/Photos/master/2003/11/01/20031101_9395.jpg start import /media/STEC_838C-1111/test/img/4_2003_11_01.jpg finish import /media/STEC_838C-1111/test/img/4_2003_11_01.jpg to /media/STEC_838C-1111/alice/Photos/master/2003/11/01/20031101_9396.jpg start import /media/STEC_838C-1111/test/img/5_2003_11_23.jpg finish import /media/STEC_838C-1111/test/img/5_2003_11_23.jpg to /media/STEC_838C-1111/alice/Photos/master/2003/11/23/20031123_9397.jpg start import /media/STEC_838C-1111/test/img/6_2004_01_21.jpg finish import /media/STEC_838C-1111/test/img/6_2004_01_21.jpg to /media/STEC_838C-1111/alice/Photos/master/2004/01/21/20040121_9398.jpg start import /media/STEC_838C-1111/test/img/7_2004_09_12.webp finish import /media/STEC_838C-1111/test/img/7_2004_09_12.webp to /media/STEC_838C-1111/alice/Photos/master/2004/09/12/20040912_9399.webp start import /media/STEC_838C-1111/test/img/8_2008_12_14.dng finish import /media/STEC_838C-1111/test/img/8_2008_12_14.dng to /media/STEC_838C-1111/alice/Photos/master/2008/12/14/20081214_9400.dng start import /media/STEC_838C-1111/test/img/9_2013_07_28.png finish import /media/STEC_838C-1111/test/img/9_2013_07_28.png to /media/STEC_838C-1111/alice/Photos/master/2021/09/20/20210920_9401.png start import /media/STEC_838C-1111/test/img/preview.jpg finish import /media/STEC_838C-1111/test/img/preview.jpg to /media/STEC_838C-1111/alice/Photos/master/2003/11/23/20031123_9402.jpg FINISH: totally scanned 1 directories, and imported 12 media files "}),e.add({id:21,href:"/zh/docs/Usage/Update/",title:"手工升级Lomoarge后台系统",section:"使用说明",content:` 手工升级Lomoarge后台系统 # 如果您碰到您的Lomorage后台系统不能自动升级，请尝试下面手工升级的方法
1. 确认您使用了正确的Lomoware源 # 使用ssh 工具登录您的树莓派或者liux系统。 您可以google或者百度 如何使用ssh
比如：您的树莓派系统的IP地址是： 192.168.1.162，可以在Windows的终端输入：
ssh pi@192.168.1.162 pi@192.168.1.162&#39;s password: 默认密码是 raspberry
连接成功后，输入：
cat /etc/apt/sources.list.d/lomoware.list 显示结果如下：
deb [trusted=yes] https://lomoware.lomorage.com/debian/bookworm bookworm main 如果中间的网址不是 lomoware.lomorage.com 那请按如下方法更改, 否则跳到步骤2直接开始升级
在ssh 终端输入：
sudo nano /etc/apt/sources.list.d/lomoware.list 按下面的图中更改，
然后按 ctrl + X
接着按 Y 保存您的更改
2. 在 ssh 终端输入以下命令开始升级 # sudo apt update &amp;&amp; sudo apt install lomo-backend 如果 apt update 报签名错误 (NO_PUBKEY / GPG error) # 如果您看到类似下面的错误：
W: GPG error: https://lomoware.lomorage.com/debian/bookworm bookworm InRelease: The following signatures couldn&#39;t be verified because the public key is not available: NO_PUBKEY xxxxxxxxxxxxxxxx 这说明我们更新了源的签名密钥（比如旧密钥丢失需要更换），而您的系统里还是旧的密钥。重新执行一遍安装密钥的步骤即可：
sudo apt install -y ca-certificates sudo update-ca-certificates --fresh curl -fsSL https://lomoware.lomorage.com/debian/gpg.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/lomorage-apt-key.gpg &gt; /dev/null 然后重新运行第2步的升级命令。
注意：如果您的 /etc/apt/sources.list.d/lomoware.list 里的内容是 deb [trusted=yes] ...（带 [trusted=yes]），说明这台设备本来就跳过了签名校验，不会碰到这个问题，也不需要执行上面的步骤。
3. 在手机端 设置 页面 查看您的服务器信息，确保升级成功 # 如果有问题，请加微信或者发email到 lomorage@gmail.com.
扫码加微信哦
`}),e.add({id:22,href:"/zh/docs/Installation/lomo-frame/",title:"Lomorage相框",section:"安装",content:` 安装 # Lomo-frame应用只支持Raspberry Pi平台, Windows/Mac或docker版本不支持。 如果您使用最新的Lomorage树莓派系统镜像, 就无需再安装Lomo-frame应用，已经预装到系统中了。
如果您没有使用Lomorage树莓派系统镜像，请参考 这里添加lomoware的源，您可以使用下面的命令安装:
sudo apt update sudo apt install lomo-frame 配置 # 您有多个选择:
在同一个树莓派上运行&quot;Lomorage照片助手&quot;和相框程序。
在不同的树莓派上运行&quot;Lomorage照片助手&quot;和相框程序，比如您可以用树莓派zero来运行相框程序，用性能更好的的树莓派4来运行树莓派4。
如果相框程序运行起来后，会在相框屏幕上显示一个二维码，您可以使用iOS 或者 安卓 Lomorage应用程序来注册相框，成功后，您就可以在Lomorage手机应用里给相框分享照片了，就像分享到其他联系人一样。
快速开始 # 如果您已经安装了Lomo-frame程序，它会在开机后自动启动。
如果树莓派没有连上网络，您需要先将其连上网络，如果您使用WiFi，先连上HDMI和键盘，然后重启设备，按照屏幕上的提示进入命令行并登陆，接下来可以使用命令wifi_switch.sh client [wifi-ssid] [wifi-password], 用您自己的配置替换&quot;[wifi-ssid]&ldquo;和&rdquo;[wifi-password]&quot;。
您有可能会碰到&quot;Wi-Fi is currently blocked by rfkill&quot;的问题，可以执行下面的命令检查一下WiFi是否被禁用:
pi@raspberrypi:~ $ sudo rfkill list all 0: phy0: Wireless LAN Soft blocked: no Hard blocked: no 1: hci0: Bluetooth Soft blocked: yes Hard blocked: no 您可以使用下面的命令来启用WiFi:
sudo rfkill unblock 0 这里“0”是上面Wireless LAN的序号。
启用之后您可以再尝试wifi_switch.sh。
网络设置完成后，重启，会显示QRCode，您可以到Lomorage iOS APP的设置页面，注册相框，然后您就可以使用手机应用程序来分享照片给数码相框。
如果你无需更多的高级配置，则可以跳过下面的内容。
关闭开启相框 # Lomo-frame应用程序会在系统启动的时候自动加载，但如果您需要手动控制，你可以使用framectrl.sh on命令打开, 或者使用framectrl.sh off命令关闭。这个命令打开或关闭Lomo-frame应用，并同时打开或者关闭显示器。
关闭开启Lomo-frame应用 # 如果您只是想退出Lomo-frame应用，但是想让显示器L续开着，您可以使用下面的方法之一:
如果树莓派接了键盘，按&quot;esc&quot;键。
如果您使用ssh访问，使用sudo service supervisor stop命令。
您可以用sudo service supervisor start命令打开Lomo-frame应用.
定时开关 # 默认打开时间是&quot;08:00 am&quot;, 关闭时间是&quot;21:00 pm&quot;.
您可以使用下面的命令来修改, 下面的命令修改打开时间为&quot;10:00 am&quot;，关闭时间为&quot;18:00&quot;:
framectr.sh add --on-hour 10 --off-hour 18 您也可以修改打开时间为&quot;10:30 am&quot;，关闭时间为&quot;18:30&quot;
framectr.sh add --on-hour 10 --on-min 30 --off-hour 18 --off-min 30 或者您想7x24小时开机, 删除定时开关机:
framectr.sh remove 播放顺序 # 默认是随机播放，但如果您希望顺序播放:
sudo sed -i &#34;s/is_random =.*/is_random = false/&#34; /opt/lomorage/var/video_looper.ini 或者您想改为随机播放:
sudo sed -i &#34;s/is_random =.*/is_random = true/&#34; /opt/lomorage/var/video_looper.ini 自定义播放列表 # 您可以创建后修改播放列表文件&quot;/opt/lomorage/var/lomo-playlist.txt&quot;，格式是每个文件路径一行。
播放媒体类型 # 默认会播放视频和照片，但如果您只想播放照片，您可以修改&quot;/opt/lomorage/var/video_looper.ini&quot;文件中的&quot;media_type&quot;:
sudo sed -i &#34;s/media_type =.*/media_type = image/&#34; /opt/lomorage/var/video_looper.ini 或者您只想播放视频:
sudo sed -i &#34;s/media_type =.*/media_type = video/&#34; /opt/lomorage/var/video_looper.ini 或者想重置为播放视频和照片:
sudo sed -i &#34;s/media_type =.*/media_type = all/&#34; /opt/lomorage/var/video_looper.ini 快捷键 # 您可以通过下面的快捷键来控制:
&ldquo;r&rdquo;: 重新扫描并生成播放列表。
&ldquo;k&rdquo;: 跳到下一个视频或图片。
&ldquo;s&rdquo;: 暂停播放/继续播放
&ldquo;esc&rdquo;: 退出应用
设置多个数码相框 # 下面的设置需要比较多的专业知识，以后我们会在手机应用中添加相应的控制和配置功能。
如果您已经有了树莓派在跑&quot;Lomorage照片助手&quot;程序（主树莓派），并在上面连接了移动硬盘，您很可能会把它放在储藏室并使用有线连接，而您可能是希望数码相框放在卧室或者客厅。
您可以使用低成本的树莓派Zero w来安装数码相框程序，并通过WiFi远程访问您的照片和视频。树莓派Zero w跑数码相框应用甚至能流畅的播放视频。
安装Lomo-frame 您可以按照本页面最前面的方式来安装。
设置WiFi连接 键盘连接到Raspberry Pi zero W并登陆, 如果您是Lomorage的树莓派镜像，可以使用命令wifi_switch.sh client [wifi-ssid] [wifi-password], 用您自己的配置替换&quot;[wifi-ssid]&ldquo;和&rdquo;[wifi-password]&quot;。如果使用其他系统，您可以参考网上其他资料来设置WiFi连接。
检查主树莓派的IP地址 您可以在手机APP里面查看，点击“设置”，找到“本地服务”，其中的&quot;服务器地址“字段里面的就是IP地址。
找到主树莓派的加载目录 您可以把主树莓派的&quot;media&quot;目录通过SAMBA协议加载到电脑上，用户名是&quot;lomoware&quot;，密码是&quot;lomorage&quot;，你可以在&quot;media&quot;目录下找到加载的存储媒体文件的目录名。
远程挂载媒体目录到树莓派zero w 比如加载到主树莓派的目录路径为&quot;/media/WD_90C27F73C27F5C82&quot;，主树莓派的IP地址为192.168.1.155, 您可以登陆树莓派zero w，并远程挂载那个目录到本地:
sudo mkdir /media/WD_90C27F73C27F5C82 echo &#34;//192.168.1.124/media/WD_90C27F73C27F5C82 /media/WD_90C27F73C27F5C82 cifs user=pi,pass=raspberry,uid=1000,gid=1000&#34; | sudo tee -a /etc/fstab sudo mount -a 重启 sudo reboot 重启之后，您应该可以看到开始扫描媒体文件，并生成播放列表了。
`}),e.add({id:23,href:"/zh/docs/Installation/lomorage-importer/",title:"导入工具",section:"安装",content:` 最近更新: 07/19/2022 # 什么是Lomorage 导入工具 # Lomorage 导入工具是把照片和视频批量导入到Lomorage系统的桌面程序。
它可以将Google Photo 下载下来的 ZIP 文件直接导入Lomorage系统，方便快捷。
也支持把本地现有的文件导入到Lomorage，选择某个目录或者批量选择文件
目前该工具支持 Windows and MacOS.
下载 # 可以去Github Lomo-importer@github 下载最新的可执行程序。
最新导入工具下载链接 # 如果您使用的是Windows的Lomorage照片助手，可以直接从照片助手程序界面启动导入工具，而无需再下载该导入工具！
Windows 点击下载最新导入工具
MacOS LomoImporter.app2021-08-31_14-13-34_mac.zip
快速使用视频 # 例子: 如何批量导入某个文件夹（目录）里的所有图片和视频文件 # 按如下界面登录Lomorage 点击 按钮 “1.Select Folder&hellip;&quot;, 选择你需要导入的目录，程序会自动遍历该目录下的文件夹，并显示在界面上 等分析完毕， 点击按钮 “2.Start Import&quot;，如下图所示： 例子: 如何批量导入Google Photo的 ZIP 文件 # 第一步是去 takeout.google.com 把所有的照片下载下来，不需要解压
按如下界面登录Lomorage
点击 按钮 “1.Add Files&hellip;&quot;, 选择你需要导入的ZIP 文件，等分析完成后， 点击按钮 “2.Start Import&quot;，如下图所示： 有任何问题，请与我们联系：support at lomorage dot com
从已有目录中导入媒体文件 # 如果用户有一些媒体文件存储在已有的USB硬盘或者本地磁盘，或者远程mount的磁盘，并且希望可以直接导入到本系统里面，除了使用importer tool，也可以使用lomoc来完成，这样可以避免额外的网络流量。缺省情况下，lomoc会删除旧文件，移动到新目录下，但是如果用户指定--no-move选项，则旧文件会仍然保留在已有的目录中，&ldquo;Lomorage照片助手&quot;不会做任何操作。所有的导入日志存储在/opt/lomorage/var/log/import_[import directory].log里面。
$ /opt/lomorage/bin/lomoc import -h NAME: lomoc import - Import all photos from given directory into lomo backend with given username and password USAGE: lomoc import [command options] [username] [password] [directory] OPTIONS: --port value, -p value (default: 8000) --no-move, -n not moving original photos/videos, and only insert record in db 需要注意事项:
缺省情况下，lomod在端口8000监听，如果用户改变了监听端口，需要设置--port来指定新的监听端口\`。 缺省情况下，导入会删除旧文件，移动到新目录下，但是如果用户指定--no-move选项，则旧文件会仍然保留在已有的目录中，&ldquo;Lomorage照片助手&quot;不会做任何操作。 导入日志范例:
$ /opt/lomorage/bin/lomoc import alice password /media/STEC_838C-1111/test/video -m Login localhost successfully import photos/videos from /media/STEC_838C-1111/test please check import log /opt/lomorage/var/log/import_media_STEC_838C-1111_test.log $ cat /opt/lomorage/var/log/import_media_STEC_838C-1111_test.log start import /media/STEC_838C-1111/test/img/11_2014_01_21.webp finish import /media/STEC_838C-1111/test/img/11_2014_01_21.webp to /media/STEC_838C-1111/alice/Photos/master/2021/09/20/20210920_9391.webp start import /media/STEC_838C-1111/test/img/12_2014_01_21.heic finish import /media/STEC_838C-1111/test/img/12_2014_01_21.heic to /media/STEC_838C-1111/alice/Photos/master/2021/09/20/20210920_9392.heic start import /media/STEC_838C-1111/test/img/14_2017_09_13.heic finish import /media/STEC_838C-1111/test/img/14_2017_09_13.heic to /media/STEC_838C-1111/alice/Photos/master/2017/09/13/20170913_9393.heic start import /media/STEC_838C-1111/test/img/1_2003_01_17.jpg finish import /media/STEC_838C-1111/test/img/1_2003_01_17.jpg to /media/STEC_838C-1111/alice/Photos/master/2003/01/17/20030117_9394.jpg start import /media/STEC_838C-1111/test/img/3_2003_11_01.jpg finish import /media/STEC_838C-1111/test/img/3_2003_11_01.jpg to /media/STEC_838C-1111/alice/Photos/master/2003/11/01/20031101_9395.jpg start import /media/STEC_838C-1111/test/img/4_2003_11_01.jpg finish import /media/STEC_838C-1111/test/img/4_2003_11_01.jpg to /media/STEC_838C-1111/alice/Photos/master/2003/11/01/20031101_9396.jpg start import /media/STEC_838C-1111/test/img/5_2003_11_23.jpg finish import /media/STEC_838C-1111/test/img/5_2003_11_23.jpg to /media/STEC_838C-1111/alice/Photos/master/2003/11/23/20031123_9397.jpg start import /media/STEC_838C-1111/test/img/6_2004_01_21.jpg finish import /media/STEC_838C-1111/test/img/6_2004_01_21.jpg to /media/STEC_838C-1111/alice/Photos/master/2004/01/21/20040121_9398.jpg start import /media/STEC_838C-1111/test/img/7_2004_09_12.webp finish import /media/STEC_838C-1111/test/img/7_2004_09_12.webp to /media/STEC_838C-1111/alice/Photos/master/2004/09/12/20040912_9399.webp start import /media/STEC_838C-1111/test/img/8_2008_12_14.dng finish import /media/STEC_838C-1111/test/img/8_2008_12_14.dng to /media/STEC_838C-1111/alice/Photos/master/2008/12/14/20081214_9400.dng start import /media/STEC_838C-1111/test/img/9_2013_07_28.png finish import /media/STEC_838C-1111/test/img/9_2013_07_28.png to /media/STEC_838C-1111/alice/Photos/master/2021/09/20/20210920_9401.png FINISH: totally scanned 1 directories, and imported 12 media files 通过USB导入 # 您可以直接通过USB来访问iPhone/Android，和无线方式比，这样导入比更快，特别是有大量照片的情况下。
iOS # 如果您使用Windows 11，照片会自动加载到电脑中，您可以直接在文件系统里访问。
如果您使用Linux，可以参考 这里来安装libimobiledevice和ifuse来将iPhone的存储加载到文件系统中。照片目录加载到文件系统后，您就可以使用上述的导入工具来进行照片的导入了。
如果您使用macOS，您依旧可以使用类似的工具，先安装libimobiledevice，但ifuse在macOS上不可用，您需要安装 osxfuse和 ifuse-mac，您可以使用brew来安装ifuse-mac: brew install gromgit/fuse/ifuse-mac
Android # TODO
以往更新: 08/19/2021 # 更新windows版本:发布64位版本，大于4G的文件直接导入 可配置导入线程数 以往更新: 07/26/2021 # 提高了导入速度 支持Lomo 动态图片格式 修复内存泄漏 修复退出时弹框问题 以往更新：07/14/2021 # 支持导入目录：直接选择某个目录，程序会遍历该目录下所有的文件 `}),e.add({id:24,href:"/zh/docs/Usage/external-access/",title:"外网访问",section:"使用说明",content:` 外网访问设置 # 外网访问主要有两种方式
通过第三方隧道连接服务 家用路由器打开端口映射，然后配置HTTP反向代理服务 使用第三方隧道连接服务(选项1) # 外网访问依赖于隧道连接服务来实现内网穿透，现有一些服务提供商提供免费的服务，大多数隧道服务都需要下载客户端，运行在您的设备上，同公网的隧道服务器建立连接，并分配子域名，当通过子域名进行访问时，隧道服务就会将请求转发到您的应用程序。
您可以使用 ngrok，ngrok是免费的隧道服务，需要注册，使用自定义子域名需要付费，但更加稳定，并没有额外的依赖。本文后续章节主要介绍这个软件，您也可以选择其他的第三方服务
1. 注册 # 注册ngrok，完成后，会显示&quot;设置和安装&quot;页面.
2. 下载 # ngrok只有一个二进制文件，您可以下载特定平台的版本。
如果您使用树莓派，您需要在&quot;设置和安装&quot;页面中拷贝Linux(ARM)版本的链接，当前是&quot;https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip&quot;, 您可以通过&quot;wget&quot;来下载。
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip 3. 安装 # 解压缩得到二进制可执行文件。在Windows或macOS下，您可以双击解压，如果您使用树莓派，可以使用unzip命令
unzip ngrok-stable-linux-arm.zip 4. 连接您的账号 # 在&quot;设置和安装&quot;页面的第三步会显示&quot;authtoken&quot;，您需要在命令行窗口中运行如下命令将&quot;authtoken&quot;添加到配置文件。
./ngrok authtoken [your-authtoken-show-in-step-3] 5. 运行ngrok # &ldquo;Lomorage照片助手&quot;默认运行在8000端口，ngrok的免费账号不能自定义子域名，ngrok运行成功后，会自动绑定一个随机子域名，这个子域名在下次ngrok重新启动时会变化。
./ngrok http 8000 6. 在Lomorage手机应用中配置隧道服务 # 打开Lomorage手机应用，在配置选项页里找到&quot;外网服务&rdquo;，设置服务器地址为ngrok输出的url，比如类似&quot;2e30eea5.ngrok.io&quot;，端口号是&quot;443&quot;。
Nginx https代理 (方案2) # 另外的方案：如果您自己有域名，可以直接在路由器上打开端口映射并且配置https代理访问&quot;Lomorage照片助手&quot;。如果您对nignx配置比较熟悉，可以参考关于nginx的配置；否则建议使用比较流行的Nginx Proxy Manager开源软件进行配置
如果您使用Lomorage的树莓派镜像, 登陆的用户名是&quot;pi&quot;，密码是&quot;raspberry&quot;; 如果您使用Lomorage的Armbian镜像, 登陆的用户名是&quot;lomoware&quot;，密码是&quot;lomorage&quot;; Nginx Proxy Manager 集成 # Nginx Proxy Manager 是一个流行的免费反向代理服务器，可以用来把内网的服务映射到公网internet上面。用户可以参考官方文档 https://nginxproxymanager.com 自行安装.
登陆之后，点击 Add Proxy Host, 然后设置自己的域名和转发ip，转发端口是上面设置的监听端口 点击 SSL，配置证书域名 点击Save, 新添加的proxy host会显示在列表中 接下来就可以尝试访问
Nginx高级配置 # 下面以Linux平台为例子，certbox和nginx都是跨平台软件，其他平台安装配置类似。
1. 安装certbot和nginx # $ sudo apt-get install certbot python-certbot-nginx -y 2. 生成证书 # 首先确保域名配置正确，然后在路由器上打开端口映射，将外网TCP80端口和443端口分别映射到安装nginx的设备80端口和443端口上。（下面配置以bob.lomorage.com 为例，请替换为自己的域名。）
$ sudo certbot --nginx -d bob.lomorage.com 这一步会输出证书目录
$ sudo certbot --nginx -d bob.lomorage.com Saving debug log to /var/log/letsencrypt/letsencrypt.log Requesting a certificate for bob.lomorage.com Successfully received certificate. Certificate is saved at: /etc/letsencrypt/live/bob.lomorage.com/fullchain.pem Key is saved at: /etc/letsencrypt/live/bob.lomorage.com/privkey.pem This certificate expires on 2021-11-14. These files will be updated when the certificate renews. Certbot has set up a scheduled task to automatically renew this certificate in the background. 3. 配置nginx # sudo创建文件“/etc/nginx/conf.d/lomorage.conf”，并填入如下内容（下面配置以bob.lomorage.com 为例，请替换为自己的域名。）:
server { listen 443 ssl; listen [::]:443 ssl; server_name bob.lomorage.com; ssl on; ssl_certificate /etc/letsencrypt/live/bob.lomorage.com/fullchain.pem; ssl_certificate_key /etc/letsencrypt/live/bob.lomorage.com/privkey.pem; location / { client_max_body_size 0; proxy_pass http://localhost:8000; proxy_set_header X-Forwarded-For $remote_addr; } } 如果Lomorage和nginx运行在不同的设备上，可以将localhost改成&quot;Lomorage照片助手&quot;的ip地址。
配置完成后，重新加载配置并启用nginx服务:
sudo systemctl restart nginx sudo systemctl enable nginx 最后可以在电脑或者手机浏览器下访问https://bob.lomorage.com/system 验证（请替换为自己的域名）是否能通过https访问&quot;Lomorage照片助手&quot;。
`}),e.add({id:25,href:"/zh/docs/Roadmap/",title:"产品路线图",section:"Docs",content:` 已实现功能 # IOS &amp; Android 应用程序 # 图片/视频备份 用户可以从手机端备份图片视频到自己家里的mini服务器 用户可以从手机端浏览所有的远端备份的图片/视频 每晚定时自动备份图片视频到设置的第二块磁盘 注意：用户需要在手机端用户设置选项选择第二块磁盘 家庭为单位的备份和共享。每个家庭用户有自己的独立账户和独立目录 扫码登录配对功能，不熟悉手机操作的家庭成员可以通过扫描其他设备生成的二维码直接登录自己的账户，无需输入密码 家庭成员之间照片和视频的分享 不用担心泄露隐私 不用担心照片分辨率 通过以下方式，可以分享照片和视频到电视或者其他显示器: 安装Lomoframe软件 使用Chromecast：Lomorage后台软件可以自动发现Chromecast。发现添加之后，用户可以自动分享 IOS 应用程序 # 睡眠模式下后台自动上传 基于地理位置分类图片和视频，从而可以按照地理位置搜索 自动识别照片重的文本，从而可以按照文字搜索 自动根据图片内容查找相似的图片 Web应用 # 用户可以从本地计算机上传图片/视频 用户可以从本地计算机浏览远端图片/视频 用户可以在收件箱查看家庭成员分享的图片/视频 Lomo importer # 原生跨平台应用帮助用户批量导入图片
用户可以直接导入google takeout zip文件 用户可以选择从本地文件夹导入 Lomoframe相框应用 # 利用树莓派或者任何单板计算机，把大屏幕转化成数码相框
用户可以通过手机联动，分享喜欢的图片和视频 Android 平板相框应用程序 # 在android平板上安装 lomoframe 应用，把平板变为数码相框 第三方集成 # Chromecast # 自动发现chromecast设备，自动添加到家庭用户成员，任意的家庭用户可以从手机端选择喜欢的照片和视频投影
待实现功能 # 帮助用户从手机端扫描，分类，导入已有的图片 相册管理 远程备份 更多的AI功能 Android 应用 # 休眠模式下上传 - 开发中 基于内容的相似度检测 - 开发中 基于属性搜索 Lomo Importer: # 导入google takeout zip文件中的元数据 第三方集成 # 魔镜模块集成 - 开发中 Amazon Fire TV - 开发中 Roku 电视集成 `}),e.add({id:26,href:"/zh/docs/Usage/customized-view/",title:"自定义视图",section:"使用说明",content:` 自定义视图 # Lomorage按“年/月/日”的目录结构存储照片和视频，有些用户希望能按照“年/月”或者“年”的方式在电脑上浏览照片，有些用户希望能按更有意义的目录名来组织照片视频（自定义相册）。
Lomorage通过提供虚拟的视图来解决这个问题，它可以提供多种不同的视图来方便用户浏览照片，而不影响到在硬盘上的照片物理存储目录结构。
物理存储目录结构如下:
修改自定义视图为&quot;年&quot;:
修改自定义视图为&quot;年/月&quot;:
您可能也注意到上面的截图中有“Albums”目录，这个目录存放的是您在手机APP上创建的相册:
您可以通过Mac/Windows下的“Lomorage照片助手”来修改“自定义视图”:
Windows:
MacOS:
或者通过Lomorage手机APP来修改（如果您使用的是其他平台的“Lomorage照片助手”）:
安卓:
再修改了“自定义视图”之后，您可以在Windows和Mac上加载“自定义视图”。如果您使用的是Mac/Windows下的“Lomorage照片助手”，会自动加载并弹出已经加载的目录。如果您使用其他平台的“Lomorage照片助手”，可以手动参考下面的链接来加载，Lomorage使用WebDAV协议，并通过&quot;http://[Lomorage照片助手ip地址]:8004&quot;访问，无需密码。
MacOS: https://support.apple.com/zh-cn/guide/mac-help/mchlp1546/mac Windows: https://bynss.com/windows/501651.html `})})()