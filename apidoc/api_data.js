define({ "api": [
  {
    "type": "delete",
    "url": "/project/:id/:year/:month/member",
    "title": "删除项目参与成员",
    "name": "DeleteProjectMember",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>项目月度成本归属年.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>项目月度成本归属月.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>成员用户名.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "project",
            "description": "<p>项目详情.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project._id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project.name",
            "description": "<p>项目名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>项目月度成本归属年(yyyy).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>项目月度成本归属月(MM).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "members",
            "description": "<p>项目成员列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.username",
            "description": "<p>项目成员用户名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.name",
            "description": "<p>项目成员名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.role",
            "description": "<p>项目成员角色.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/project/:id/:year/:month/:username/:day/list1",
    "title": "删除项目参与成员工作时间(周一至周五工作日)",
    "name": "DeleteProjectMemberWorkHours1",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>项目月度成本归属年.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>项目月度成本归属月.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>成员用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "day",
            "description": "<p>项目月度成本归属日.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/project/:id/:year/:month/:username/:day/list2",
    "title": "删除项目参与成员工作时间(周六，周日加班)",
    "name": "DeleteProjectMemberWorkHours2",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>项目月度成本归属年.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>项目月度成本归属月.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>成员用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "day",
            "description": "<p>项目月度成本归属日.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/project/:id/:year/:month/:username/:day/list3",
    "title": "删除项目参与成员工作时间(国定假加班)",
    "name": "DeleteProjectMemberWorkHours3",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>项目月度成本归属年.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>项目月度成本归属月.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>成员用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "day",
            "description": "<p>项目月度成本归属日.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/project/:id/:year/:month/:username/:day/list4",
    "title": "删除项目参与成员工作时间(周一至周五工作日加班)",
    "name": "DeleteProjectMemberWorkHours4",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>项目月度成本归属年.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>项目月度成本归属月.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>成员用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "day",
            "description": "<p>项目月度成本归属日.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/project/:id",
    "title": "项目详情",
    "name": "GetProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>项目名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "members",
            "description": "<p>项目成员列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.username",
            "description": "<p>项目成员用户名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.name",
            "description": "<p>项目成员名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.role",
            "description": "<p>项目成员角色.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "monthlycosts",
            "description": "<p>项目月度成本列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "monthlycosts.year",
            "description": "<p>项目月度成本归属年(yyyy).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "monthlycosts.month",
            "description": "<p>项目月度成本归属月(MM).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "monthlycosts.memberscount",
            "description": "<p>项目月度成本参与成员数.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "monthlycosts.workhourssum_1",
            "description": "<p>项目月度成本工作时间汇总(周一至周五工作日).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "monthlycosts.workhourssum_2",
            "description": "<p>项目月度成本工作时间汇总(周六，周日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "monthlycosts.workhourssum_3",
            "description": "<p>项目月度成本工作时间汇总(国定假加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "monthlycosts.workhourssum_4",
            "description": "<p>项目月度成本工作时间汇总(周一至周五工作日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "monthlycosts.membercostsum_1",
            "description": "<p>项目月度成本人工成本汇总(周一至周五工作日).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "monthlycosts.membercostsum_2",
            "description": "<p>项目月度成本人工成本汇总(周六，周日加班费).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "monthlycosts.membercostsum_3",
            "description": "<p>项目月度成本人工成本汇总(国定假加班费).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "monthlycosts.fundssum",
            "description": "<p>项目月度成本经费汇总.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "monthlycosts.otherchargessum",
            "description": "<p>项目月度成本其它费用汇总.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "monthlycosts.outsourcessum",
            "description": "<p>项目月度成本外协费用汇总.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/project/:id/:year/:month",
    "title": "项目月度成本",
    "name": "GetProjectMonthlyCost",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>项目月度成本归属年.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>项目月度成本归属月.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "project",
            "description": "<p>项目详情.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project._id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project.name",
            "description": "<p>项目名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>项目月度成本归属年(yyyy).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>项目月度成本归属月(MM).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "memberscount",
            "description": "<p>项目月度成本参与成员数.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workhourssum_1",
            "description": "<p>项目月度成本工作时间汇总(周一至周五工作日).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workhourssum_2",
            "description": "<p>项目月度成本工作时间汇总(周六，周日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workhourssum_3",
            "description": "<p>项目月度成本工作时间汇总(国定假加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workhourssum_4",
            "description": "<p>项目月度成本工作时间汇总(周一至周五工作日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membercostsum_1",
            "description": "<p>项目月度成本人工成本汇总(周一至周五工作日).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membercostsum_2",
            "description": "<p>项目月度成本人工成本汇总(周六，周日加班费).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "membercostsum_3",
            "description": "<p>项目月度成本人工成本汇总(国定假加班费).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "fundssum",
            "description": "<p>项目月度成本经费汇总.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "otherchargessum",
            "description": "<p>项目月度成本其它费用汇总.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "outsourcessum",
            "description": "<p>项目月度成本外协费用汇总.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "members",
            "description": "<p>项目月度成本参与成员列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.username",
            "description": "<p>项目月度成本参与成员用户名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.name",
            "description": "<p>项目月度成本参与成员名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.role",
            "description": "<p>项目月度成本参与成员角色.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "members.salary",
            "description": "<p>项目月度成本参与成员月薪资.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "members.salarymonth",
            "description": "<p>项目月度成本参与成员薪资月数(年薪资13月).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "members.monthlycostshare",
            "description": "<p>项目月度成本参与成员月均摊成本.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "workhours",
            "description": "<p>项目月度成本参与成员工作时间.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workhours.member",
            "description": "<p>项目月度成本参与成员工作时间所属成员.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.member.username",
            "description": "<p>项目月度成本参与成员工作时间所属成员用户名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.member.name",
            "description": "<p>项目月度成本参与成员工作时间所属成员名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.member.role",
            "description": "<p>项目月度成本参与成员工作时间所属成员角色.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workhours.list_1",
            "description": "<p>项目月度成本参与成员工作时间列表(周一至周五工作日).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.list_1.year",
            "description": "<p>项目月度成本参与成员工作时间列表(周一至周五工作日)归属年(yyyy).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.list_1.month",
            "description": "<p>项目月度成本参与成员工作时间列表(周一至周五工作日)归属月(MM).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.list_1.day",
            "description": "<p>项目月度成本参与成员工作时间列表(周一至周五工作日)归属日(DD).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workhours.list_1.hours",
            "description": "<p>项目月度成本参与成员工作时间列表(周一至周五工作日)工作小时(Hours).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workhours.list_2",
            "description": "<p>项目月度成本参与成员工作时间列表(周六，周日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.list_2.year",
            "description": "<p>项目月度成本参与成员工作时间列表(周六，周日加班)归属年(yyyy).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.list_2.month",
            "description": "<p>项目月度成本参与成员工作时间列表(周六，周日加班)归属月(MM).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.list_2.day",
            "description": "<p>项目月度成本参与成员工作时间列表(周六，周日加班)归属日(DD).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workhours.list_2.hours",
            "description": "<p>项目月度成本参与成员工作时间列表(周六，周日加班)工作小时(Hours).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workhours.list_3",
            "description": "<p>项目月度成本参与成员工作时间列表(国定假加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.list_3.year",
            "description": "<p>项目月度成本参与成员工作时间列表(国定假加班)归属年(yyyy).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.list_3.month",
            "description": "<p>项目月度成本参与成员工作时间列表(国定假加班)归属月(MM).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.list_3.day",
            "description": "<p>项目月度成本参与成员工作时间列表(国定假加班)归属日(DD).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workhours.list_3.hours",
            "description": "<p>项目月度成本参与成员工作时间列表(国定假加班)工作小时(Hours).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workhours.list_4",
            "description": "<p>项目月度成本参与成员工作时间列表(周一至周五工作日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.list_4.year",
            "description": "<p>项目月度成本参与成员工作时间列表(周一至周五工作日加班)归属年(yyyy).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.list_4.month",
            "description": "<p>项目月度成本参与成员工作时间列表(周一至周五工作日加班)归属月(MM).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workhours.list_4.day",
            "description": "<p>项目月度成本参与成员工作时间列表(周一至周五工作日加班)归属日(DD).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workhours.list_4.hours",
            "description": "<p>项目月度成本参与成员工作时间列表(周一至周五工作日加班)工作小时(Hours).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/project/:username/list",
    "title": "指定用户所属项目",
    "name": "GetUserProjectList",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名称.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "projects",
            "description": "<p>项目列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects._id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.name",
            "description": "<p>项目名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "projects.members",
            "description": "<p>项目成员列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.members.username",
            "description": "<p>项目成员用户名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.members.name",
            "description": "<p>项目成员名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.members.role",
            "description": "<p>项目成员角色.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "projects.monthlycosts",
            "description": "<p>项目月度成本列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.monthlycosts.year",
            "description": "<p>项目月度成本归属年(yyyy).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.monthlycosts.month",
            "description": "<p>项目月度成本归属月(MM).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "projects.monthlycosts.memberscount",
            "description": "<p>项目月度成本参与成员数.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "projects.monthlycosts.workhourssum_1",
            "description": "<p>项目月度成本工作时间汇总(周一至周五工作日).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "projects.monthlycosts.workhourssum_2",
            "description": "<p>项目月度成本工作时间汇总(周六，周日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "projects.monthlycosts.workhourssum_3",
            "description": "<p>项目月度成本工作时间汇总(国定假加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "projects.monthlycosts.workhourssum_4",
            "description": "<p>项目月度成本工作时间汇总(周一至周五工作日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "projects.monthlycosts.membercostsum_1",
            "description": "<p>项目月度成本人工成本汇总(周一至周五工作日).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "projects.monthlycosts.membercostsum_2",
            "description": "<p>项目月度成本人工成本汇总(周六，周日加班费).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "projects.monthlycosts.membercostsum_3",
            "description": "<p>项目月度成本人工成本汇总(国定假加班费).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "projects.monthlycosts.fundssum",
            "description": "<p>项目月度成本经费汇总.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "projects.monthlycosts.otherchargessum",
            "description": "<p>项目月度成本其它费用汇总.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "projects.monthlycosts.outsourcessum",
            "description": "<p>项目月度成本外协费用汇总.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/project",
    "title": "创建/更新项目",
    "name": "NewOrSaveProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>项目名称.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>项目名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "members",
            "description": "<p>项目成员列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.username",
            "description": "<p>项目成员用户名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.name",
            "description": "<p>项目成员名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.role",
            "description": "<p>项目成员角色.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/project/:id/:year/:month/member",
    "title": "创建/更新项目参与成员",
    "name": "NewOrSaveProjectMember",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>项目月度成本归属年.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>项目月度成本归属月.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>成员用户名(可选).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>成员名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>成员角色(可选).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "project",
            "description": "<p>项目详情.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project._id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project.name",
            "description": "<p>项目名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>项目月度成本归属年(yyyy).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>项目月度成本归属月(MM).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "members",
            "description": "<p>项目成员列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.username",
            "description": "<p>项目成员用户名.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.name",
            "description": "<p>项目成员名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "members.role",
            "description": "<p>项目成员角色.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/project/:id/:year/:month/:username/:day/list1",
    "title": "创建/更新项目参与成员工作时间(周一至周五工作日)",
    "name": "NewOrSaveProjectMemberWorkHours1",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>项目月度成本归属年.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>项目月度成本归属月.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>成员用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "day",
            "description": "<p>项目月度成本归属日.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hours",
            "description": "<p>项目月度成本工作小时.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/project/:id/:year/:month/:username/:day/list2",
    "title": "创建/更新项目参与成员工作时间(周六，周日加班)",
    "name": "NewOrSaveProjectMemberWorkHours2",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>项目月度成本归属年.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>项目月度成本归属月.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>成员用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "day",
            "description": "<p>项目月度成本归属日.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hours",
            "description": "<p>项目月度成本工作小时.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/project/:id/:year/:month/:username/:day/list3",
    "title": "创建/更新项目参与成员工作时间(国定假加班)",
    "name": "NewOrSaveProjectMemberWorkHours3",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>项目月度成本归属年.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>项目月度成本归属月.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>成员用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "day",
            "description": "<p>项目月度成本归属日.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hours",
            "description": "<p>项目月度成本工作小时.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/project/:id/:year/:month/:username/:day/list4",
    "title": "创建/更新项目参与成员工作时间(周一至周五工作日加班)",
    "name": "NewOrSaveProjectMemberWorkHours4",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>项目ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>项目月度成本归属年.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>项目月度成本归属月.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>成员用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "day",
            "description": "<p>项目月度成本归属日.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hours",
            "description": "<p>项目月度成本工作小时.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/timesheet",
    "title": "全部考勤表",
    "name": "GetTimeSheetList",
    "group": "TimeSheet",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "years",
            "description": "<p>年度列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "years.year",
            "description": "<p>所属年度(yyyy).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "years.months",
            "description": "<p>月度列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "years.months.month",
            "description": "<p>所属月度(MM).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "years.months.timesheet",
            "description": "<p>考勤表.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "years.months.timesheet.employeescount",
            "description": "<p>考勤表员工数.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "years.months.timesheet.workhourssum_1",
            "description": "<p>考勤表员工工作时间汇总(周一至周五工作日).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "years.months.timesheet.workhourssum_2",
            "description": "<p>考勤表员工工作时间汇总(周六，周日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "years.months.timesheet.workhourssum_3",
            "description": "<p>考勤表员工工作时间汇总(国定假加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "years.months.timesheet.workhourssum_4",
            "description": "<p>考勤表员工工作时间汇总(周一至周五工作日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "years.months.timesheet.takeoffhourssum",
            "description": "<p>考勤表员工调休时间汇总.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "years.months.timesheet.leavehourssum",
            "description": "<p>考勤表员工请假时间汇总.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/timesheet.js",
    "groupTitle": "TimeSheet"
  },
  {
    "type": "get",
    "url": "/timesheet/:year/:month",
    "title": "月度考勤表",
    "name": "GetTimeSheetListByMonth",
    "group": "TimeSheet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>所属年度.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>所属月度.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>所属年度(yyyy).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>所属月度(MM).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "timesheet",
            "description": "<p>考勤表.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timesheet.employeescount",
            "description": "<p>考勤表员工数.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timesheet.workhourssum_1",
            "description": "<p>考勤表员工工作时间汇总(周一至周五工作日).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timesheet.workhourssum_2",
            "description": "<p>考勤表员工工作时间汇总(周六，周日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timesheet.workhourssum_3",
            "description": "<p>考勤表员工工作时间汇总(国定假加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timesheet.workhourssum_4",
            "description": "<p>考勤表员工工作时间汇总(周一至周五工作日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timesheet.takeoffhourssum",
            "description": "<p>考勤表员工调休时间汇总.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timesheet.leavehourssum",
            "description": "<p>考勤表员工请假时间汇总.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "timesheet.employees",
            "description": "<p>考勤表员工.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timesheet.employees.employeename",
            "description": "<p>考勤表员工名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "timesheet.employees.days",
            "description": "<p>考勤表员工考勤.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timesheet.employees.days.day",
            "description": "<p>考勤表员工考勤日(dd).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timesheet.employees.days.workhours_1",
            "description": "<p>考勤表员工考勤日工作时间(周一至周五工作日).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timesheet.employees.days.workhours_2",
            "description": "<p>考勤表员工考勤日工作时间(周六，周日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timesheet.employees.days.workhours_3",
            "description": "<p>考勤表员工考勤日工作时间(国定假加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timesheet.employees.days.workhours_4",
            "description": "<p>考勤表员工考勤日工作时间(周一至周五工作日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timesheet.employees.days.takeoffhours",
            "description": "<p>考勤表员工考勤日调休时间.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timesheet.employees.days.leavehours",
            "description": "<p>考勤表员工考勤日请假时间.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/timesheet.js",
    "groupTitle": "TimeSheet"
  },
  {
    "type": "get",
    "url": "/timesheet/:year",
    "title": "年度考勤表",
    "name": "GetTimeSheetListByYear",
    "group": "TimeSheet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>所属年度.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>所属年度(yyyy).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "months",
            "description": "<p>月度列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "months.month",
            "description": "<p>所属月度(MM).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "months.timesheet",
            "description": "<p>考勤表.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "months.timesheet.employeescount",
            "description": "<p>考勤表员工数.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "months.timesheet.workhourssum_1",
            "description": "<p>考勤表员工工作时间汇总(周一至周五工作日).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "months.timesheet.workhourssum_2",
            "description": "<p>考勤表员工工作时间汇总(周六，周日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "months.timesheet.workhourssum_3",
            "description": "<p>考勤表员工工作时间汇总(国定假加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "months.timesheet.workhourssum_4",
            "description": "<p>考勤表员工工作时间汇总(周一至周五工作日加班).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "months.timesheet.takeoffhourssum",
            "description": "<p>考勤表员工调休时间汇总.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "months.timesheet.leavehourssum",
            "description": "<p>考勤表员工请假时间汇总.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/timesheet.js",
    "groupTitle": "TimeSheet"
  }
] });
