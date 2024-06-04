import { NextRequest, NextResponse } from "next/server";
import models from "@/app/utils/models";

export async function POST(request: NextRequest) {
    const count = 20;
    let c = 0;
    try {
        if (request.method == "POST") {
            const body = await request.json();
            const { sort, setnum } = body;
            
            const matchedData: any[] = [];
            if (sort === "latest") {
                c + setnum;
                console.log("Sort: ", sort, "Setnum: ", setnum, "Count: ", count)
                const imageData = await models.info_image.findAll({
                    attributes: ["path_Img", "img_ID", "user_like", "UserID"],
                    where: {
                        status_img: 'public' // เงื่อนไขการเช็คค่า status
                    },
                    order: [['timestamp', 'DESC']],
                    raw: true
                }) as any;

                for (let i = setnum; i < Math.min(setnum + count, imageData.length); i++) {
                    const item = imageData[i];
                    item.imageUrl = item.path_Img + "?id=" + item.img_ID + "&like=" + item.user_like;
                    const userIds = imageData.map((item: any) => item.UserID);
                    const userData = await models.User.findAll({
                        attributes: ["UserID", "name", "path_profile"], // รวม UserID ใน attributes เพื่อใช้ในการตรวจสอบ
                        where: {
                            UserID: userIds // สมมติว่าชื่อคอลัมน์ primary key ใน model User คือ 'UserID'
                        },
                        raw: true
                    }) as any;
                    const imageItem = imageData[i];
                    const matchedUser = userData.find((userItem: any) => userItem.UserID === imageItem.UserID);
                    if (matchedUser) {
                        matchedData.push({
                            imageUrl: "!Imgurl=" + imageItem.path_Img + "?id=" + imageItem.img_ID + "?like=" + imageItem.user_like + "|path_profile=" + matchedUser.path_profile + "?name=" + matchedUser.name,
                        });
                    }
                    c += 1;
                }

                console.log("Matched Data: ", matchedData);

                const datas = matchedData;
                return NextResponse.json({ message: "Success", status: 200, img_url: datas, sort: sort, setnum: c });

            } else if (sort === "popular") {
                c + setnum;
                const imageData = await models.info_image.findAll({
                    attributes: ["path_Img", "img_ID", "user_like", "UserID"],
                    where: {
                        status_img: 'public' // เงื่อนไขการเช็คค่า status
                    },
                    order: [['user_like', 'DESC']],
                    raw: true
                }) as any;

                for (let i = setnum; i < Math.min(setnum + count, imageData.length); i++) {
                    const item = imageData[i];
                    item.imageUrl = item.path_Img + "?id=" + item.img_ID + "&like=" + item.user_like;
                    const userIds = imageData.map((item: any) => item.UserID);
                    const userData = await models.User.findAll({
                        attributes: ["UserID", "name", "path_profile"], // รวม UserID ใน attributes เพื่อใช้ในการตรวจสอบ
                        where: {
                            UserID: userIds // สมมติว่าชื่อคอลัมน์ primary key ใน model User คือ 'UserID'
                        },
                        raw: true
                    }) as any;
                    const imageItem = imageData[i];
                    const matchedUser = userData.find((userItem: any) => userItem.UserID === imageItem.UserID);
                    if (matchedUser) {
                        matchedData.push({
                            imageUrl: "!Imgurl=" + imageItem.path_Img + "?id=" + imageItem.img_ID + "?like=" + imageItem.user_like + "|path_profile=" + matchedUser.path_profile + "?name=" + matchedUser.name,
                        });
                    }
                    c += 1;
                }

                console.log("Matched Data: ", matchedData);

                const datas = matchedData;
                return NextResponse.json({ message: "Success", status: 200, img_url: datas, sort: sort, setnum: c });
            }

            // สร้าง URL สำหรับรูปภาพและดึง UserIDs
        }
    }
    catch (error) {
        console.error("Error: ", error);
        return NextResponse.json({ message: "Failed", status: 500 });
    }
}
