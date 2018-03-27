define({ "api": [
  {
    "type": "get",
    "url": "/project/:id",
    "title": "取得项目详情",
    "name": "GetProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Projects unique ID.</p>"
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
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
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
    "title": "取得当前用户所有项目",
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
            "type": "object[]",
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
            "type": "object[]",
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
    "type": "post",
    "url": "/project/",
    "title": "Post New Project information",
    "name": "PostNewProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Projects name.</p>"
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
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/project.js",
    "groupTitle": "Project"
  }
] });
