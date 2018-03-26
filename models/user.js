var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var ObjectId  = Schema.ObjectId;

var UserSchema = new Schema({
  loginname: {type: String},
  name: {type: String },
  email: {type: String },
  avatar: {type: String },
  active: {type: Boolean, default: false },
  accessToken: {type: String}
});

UserSchema.virtual('avatar_url').get(function () {
  var url = this.avatar || ('https://gravatar.com/avatar/' + utility.md5(this.email.toLowerCase()) + '?size=48');

  // www.gravatar.com 被墙
  url = url.replace('www.gravatar.com', 'gravatar.com');

  // 让协议自适应 protocol，使用 `//` 开头
  if (url.indexOf('http:') === 0) {
    url = url.slice(5);
  }

  // 如果是 github 的头像，则限制大小
  if (url.indexOf('githubusercontent') !== -1) {
    url += '&s=120';
  }

  return url;
});

mongoose.model('User', UserSchema);
