# Ai_Schedule
小爱课程表 解析课程表数据 天津理工大学-师生服务
华信的同学需要自己改一下课程时间

## 运行

运行 `npm run test` 以运行

## 数据解析格式：

<table><thead><tr><th>参数名</th><th>术语解释</th><th>是否必填</th><th align="left">说明</th></tr></thead><tbody><tr><td>courseInfo</td><td>Array[{},{}</td><td>是</td><td align="left">课程表详细信息: <br>name: String 课程 <br>position: Sting 教室<br> teacher:String 教师<br> weeks:Array(非空)第几周 <br> day:Sring 星期几 <br>section:[] 第几节</td></tr><tr><td>sectionTimes</td><td>Array[{},{}]</td><td>否</td><td align="left">课时信息:<br> section: Number 第几节<br> startTime: String 开始时间<br> endTime: String 结束时间</td></tr></tbody></table>

## 示例
```
{
    "courseInfos": [
      {
        "name": "数学",
        "position": "教学楼1",
        "teacher": "张三",
        "weeks": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20
        ],
        "day": 3,
        "sections": [
          {
            "section": 2,
            "startTime": "08:00",//可不填
            "endTime": "08:50"//可不填
          }
        ],
      },
      {
        "name": "语文",
        "position": "基础楼",
        "teacher": "荆州",
        "weeks": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20
        ],
        "day": 2,
        "sections": [
          {
            "section": 2,
            "startTime": "08:00",//可不填
            "endTime": "08:50"//可不填
          },
          {
            "section": 3,
            "startTime": "09:00",//可不填
            "endTime": "09:50"//可不填
          }
        ],
      }
    ],
    "sectionTimes": [
      {
        "section": 1,
        "startTime": "07:00",
        "endTime": "07:50"
      },
      {
        "section": 2,
        "startTime": "08:00",
        "endTime": "08:50"
      },
      {
        "section": 3,
        "startTime": "09:00",
        "endTime": "09:50"
      },
      {
        "section": 4,
        "startTime": "10:10",
        "endTime": "11:00"
      },
      {
        "section": 5,
        "startTime": "11:10",
        "endTime": "12:00"
      },
      {
        "section": 6,
        "startTime": "13:00",
        "endTime": "13:50"
      },
      {
        "section": 7,
        "startTime": "14:00",
        "endTime": "14:50"
      },
      {
        "section": 8,
        "startTime": "15:10",
        "endTime": "16:00"
      },
      {
        "section": 9,
        "startTime": "16:10",
        "endTime": "17:00"
      },
      {
        "section": 10,
        "startTime": "17:10",
        "endTime": "18:00"
      },
      {
        "section": 11,
        "startTime": "18:40",
        "endTime": "19:30"
      },
      {
        "section": 12,
        "startTime": "19:40",
        "endTime": "20:30"
      },
      {
        "section": 13,
        "startTime": "20:40",
        "endTime": "21:30"
      }
    ]
  }
```
