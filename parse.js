import cheerio from 'cheerio'
export function scheduleHtmlParser(html) {
    let ch = cheerio.load(html, { decodeEntities: false });
    let coursetInfo = [];
    let trd = ch("tr");
    let arr = Array(12).fill(2);
    for (let day = 1; day <= 7; day++) {
      let section = 1;
      while (section <= 12) {
        let course = ch(trd[section])
          .find(`td`)
          .eq(arr[section]++);
        section += parseInt(course.attr("rowspan"));
        let courseHTML = course.html();
        if (courseHTML != "&nbsp;" && courseHTML != null) {
          let courseArray = courseHTML.trim().split("<hr>");
          for (let oneCourse of courseArray) {
            course = oneCourse.split("&nbsp;");
            let coursename = course[0].search(/div/) == 1 ? course[1] : course[0];
            let info = course[course.length - 1].split("<br>");
            let week = [];
            let begin, end;
            if (course[course.length - 2].split("周")[1] == " ") {
              // console.log(course);
              let temp = course[course.length - 2].split("周")[0].split("-");
              begin = parseInt(temp[0]);
              end = parseInt(temp[1]);
              for (let n = begin; n <= end; n++) {
                week.push(n);
              }
            } else if (course[course.length - 2].split("周")[1][0] == ",") {
              for (let weekinfo of course[course.length - 2].split(",")) {
                if (weekinfo.split("周")[1][1] == "单") {
                  let temp = weekinfo.split("周")[0].split("-");
                  begin = temp[0] % 2 == 0 ? parseInt(temp[0]) + 1 : parseInt(temp[0]);
                  end = temp[1] % 2 == 0 ? parseInt(temp[1]) - 1 : parseInt(temp[1]);
                  for (let n = begin; n <= end; n += 2) {
                    week.push(n);
                  }
                } else if (weekinfo.split("周")[1][1] == "双") {
                  let temp = weekinfo.split("周")[0].split("-");
                  begin =
                    temp[0] % 2 != 0 ? parseInt(temp[0]) + 1 : parseInt(temp[0]);
                  end =
                    temp[1] % 2 != 0 ? parseInt(temp[1]) - 1 : parseInt(temp[1]);
                  for (let n = begin; n <= end; n += 2) {
                    week.push(n);
                  }
                } else {
                  let temp = weekinfo.split("周")[0].split("-");
                  begin = parseInt(temp[0]);
                  end = parseInt(temp[1]);
                  for (let n = begin; n <= end; n++) {
                    week.push(n);
                  }
                }
              }
            } else if (course[course.length - 2].split("周")[1][1] == "单") {
              let temp = course[course.length - 2].split("周")[0].split("-");
              begin = temp[0] % 2 == 0 ? parseInt(temp[0]) + 1 : parseInt(temp[0]);
              end = temp[1] % 2 == 0 ? parseInt(temp[1]) - 1 : parseInt(temp[1]);
              for (let n = begin; n <= end; n += 2) {
                week.push(n);
              }
            } else if (course[course.length - 2].split("周")[1][1] == "双") {
              let temp = course[course.length - 2].split("周")[0].split("-");
              begin =
                temp[0] % 2 != 0 ? parseInt(temp[0]) + 1 : parseInt(temp[0]);
              end = temp[1] % 2 != 0 ? parseInt(temp[1]) - 1 : parseInt(temp[1]);
              for (let n = begin; n <= end; n += 2) {
                week.push(n);
              }
            }
            let sections = [];
            for (let n = parseInt(info[0].match(/\d+/g)[0]); n <= parseInt(info[0].match(/\d+/g)[1]); n++) {
              sections.push(n);
            }
            var classinfo = {
              name: coursename.trim().split("[")[0],
              position: info[2].replace("\n\t\t\t  ", " ").trim(),
              teacher: info[1],
              weeks: week,
              day: day,
              sections: sections,
            };
            coursetInfo.push(classinfo);
          }
        }
      }
    }
    return coursetInfo;
  }
  