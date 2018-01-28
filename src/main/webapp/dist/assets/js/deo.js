define("disk-system:widget/plugin/uploader/context.js", function (e, t, o) {
    var n = e("base:widget/libs/jquerypacket.js"), a = e("disk-system:widget/plugin/uploader/log.js"),
        s = (e("base:widget/storage/storage.js"), {
            context: null, appVersionFetched: !1, appDownloadUrl: function () {
                var e = navigator.platform.indexOf("Mac"),
                    t = e >= 0 ? "//issuecdn.baidupcs.com/issue/netdisk/MACguanjia/BaiduNetdisk_mac_2.2.0.dmg" : "//issuecdn.baidupcs.com/issue/netdisk/yunguanjia/BaiduNetdisk_5.6.3.exe";
                return t
            }(), logparam: {product: "pan", type: "webupload", op: "webupload"}, sendLog: function (e) {
                var t = n.extend(s.logparam, e);
                s.context && s.context.updateLog && s.context.updateLog.sendLog(t)
            }, setLocalLog: function (e) {
                e = n.extend(s.logparam, e), s.context && s.context.updateLog && s.context.updateLog.setLocalLog(e)
            }
        }), d = {
            getContext: function () {
                return s.context
            }, setContext: function (e) {
                s.context = e, e && e.log && e.log.define(a)
            }, sendLog: s.sendLog, setLocalLog: s.setLocalLog, getAppVersionAsync: function (e) {
                s.appVersionFetched || (s.appVersionFetched = !0, n.ajax({url: "/disk/cmsdata?do=client"}).done(function (t) {
                    var o = n.parseJSON(t);
                    if (o && 0 === o.errorno) {
                        var a = navigator.platform.indexOf("Mac"), s = a >= 0 ? o.mac : o.guanjia;
                        e(s)
                    }
                }))
            }, getAppDownloadUrl: function () {
                return s.appDownloadUrl
            }
        };
    o.exports = d
});
;define("disk-system:widget/plugin/uploader/uploadUtil/flashUploader/swfupload.js", function (require, exports, module) {
    var SWFUpload;
    void 0 == SWFUpload && (SWFUpload = window.SWFUpload = function (t) {
        this.initSWFUpload(t)
    }), SWFUpload.prototype.initSWFUpload = function (t) {
        try {
            if (this.customSettings = {}, this.settings = t, this.eventQueue = [], this.movieName = "SWFUpload_" + SWFUpload.movieCount++, this.movieElement = null, SWFUpload.instances[this.movieName] = this, this.initSettings(), /MSIE\s?6\.0;\sWindows\sNT/.test(navigator.userAgent)) {
                var e = this;
                setTimeout(function () {
                    e.loadFlash(), e.displayDebugInfo()
                }, 100)
            } else this.loadFlash(), this.displayDebugInfo()
        } catch (s) {
            throw delete SWFUpload.instances[this.movieName], s
        }
    }, SWFUpload.instances = {}, SWFUpload.movieCount = 0, SWFUpload.version = "2.2.0 2009-03-25", SWFUpload.QUEUE_ERROR = {
        QUEUE_LIMIT_EXCEEDED: -100,
        FILE_EXCEEDS_SIZE_LIMIT: -110,
        ZERO_BYTE_FILE: -120,
        INVALID_FILETYPE: -130
    }, SWFUpload.UPLOAD_ERROR = {
        HTTP_ERROR: -200,
        MISSING_UPLOAD_URL: -210,
        IO_ERROR: -220,
        SECURITY_ERROR: -230,
        UPLOAD_LIMIT_EXCEEDED: -240,
        UPLOAD_FAILED: -250,
        SPECIFIED_FILE_ID_NOT_FOUND: -260,
        FILE_VALIDATION_FAILED: -270,
        FILE_CANCELLED: -280,
        UPLOAD_STOPPED: -290
    }, SWFUpload.FILE_STATUS = {
        QUEUED: -1,
        IN_PROGRESS: -2,
        ERROR: -3,
        COMPLETE: -4,
        CANCELLED: -5
    }, SWFUpload.BUTTON_ACTION = {
        SELECT_FILE: -100,
        SELECT_FILES: -110,
        START_UPLOAD: -120
    }, SWFUpload.CURSOR = {ARROW: -1, HAND: -2}, SWFUpload.WINDOW_MODE = {
        WINDOW: "window",
        TRANSPARENT: "transparent",
        OPAQUE: "opaque"
    }, SWFUpload.completeURL = function (t) {
        if ("string" != typeof t || t.match(/^https?:\/\//i) || t.match(/^\//)) return t;
        var e = (window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""), window.location.pathname.lastIndexOf("/"));
        return path = 0 >= e ? "/" : window.location.pathname.substr(0, e) + "/", path + t
    }, SWFUpload.prototype.initSettings = function () {
        this.ensureDefault = function (t, e) {
            this.settings[t] = void 0 == this.settings[t] ? e : this.settings[t]
        }, this.ensureDefault("upload_url", ""), this.ensureDefault("preserve_relative_urls", !1), this.ensureDefault("file_post_name", "Filedata"), this.ensureDefault("post_params", {}), this.ensureDefault("use_query_string", !1), this.ensureDefault("requeue_on_error", !1), this.ensureDefault("http_success", []), this.ensureDefault("assume_success_timeout", 0), this.ensureDefault("file_types", "*.*"), this.ensureDefault("file_types_description", "All Files"), this.ensureDefault("file_size_limit", 0), this.ensureDefault("file_upload_limit", 0), this.ensureDefault("file_queue_limit", 0), this.ensureDefault("flash_url", "/box-static/common/images/upload/swfupload.swf?t=1516328981905"), this.ensureDefault("prevent_swf_caching", !0), this.ensureDefault("button_image_url", ""), this.ensureDefault("button_width", 1), this.ensureDefault("button_height", 1), this.ensureDefault("button_text", ""), this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;"), this.ensureDefault("button_text_top_padding", 0), this.ensureDefault("button_text_left_padding", 0), this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES), this.ensureDefault("button_disabled", !1), this.ensureDefault("button_placeholder_id", ""), this.ensureDefault("button_placeholder", null), this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW), this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW), this.ensureDefault("debug", !1), this.settings.debug_enabled = this.settings.debug, this.settings.return_upload_start_handler = this.returnUploadStart, this.ensureDefault("swfupload_loaded_handler", null), this.ensureDefault("file_dialog_start_handler", null), this.ensureDefault("file_queued_handler", null), this.ensureDefault("file_queue_error_handler", null), this.ensureDefault("file_dialog_complete_handler", null), this.ensureDefault("upload_start_handler", null), this.ensureDefault("upload_progress_handler", null), this.ensureDefault("upload_error_handler", null), this.ensureDefault("upload_success_handler", null), this.ensureDefault("upload_complete_handler", null), this.ensureDefault("debug_handler", this.debugMessage), this.ensureDefault("custom_settings", {}), this.customSettings = this.settings.custom_settings, this.settings.prevent_swf_caching && (this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + (new Date).getTime()), this.settings.preserve_relative_urls || (this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url), "" !== this.settings.button_image_url && (this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url))), delete this.ensureDefault
    }, SWFUpload.prototype.loadFlash = function () {
        var t, e;
        if (null !== document.getElementById(this.movieName)) throw"ID " + this.movieName + " is already in use. The Flash Object could not be added";
        if (t = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder, void 0 == t) throw"Could not find the placeholder element: " + this.settings.button_placeholder_id;
        e = document.createElement("div"), e.innerHTML = this.getFlashHTML(), t.parentNode.replaceChild(e.firstChild, t), void 0 == window[this.movieName] && (window[this.movieName] = this.getMovieElement())
    }, SWFUpload.prototype.getFlashHTML = function () {
        return ['<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', this.settings.flash_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">', '<param name="wmode" value="', this.settings.button_window_mode, '" />', '<param name="movie" value="', this.settings.flash_url, '" />', '<param name="quality" value="high" />', '<param name="menu" value="false" />', '<param name="allowScriptAccess" value="always" />', '<param name="flashvars" value="' + this.getFlashVars() + '" />', "</object>"].join("")
    }, SWFUpload.prototype.getFlashVars = function () {
        var t = this.buildParamString(), e = this.settings.http_success.join(",");
        return ["movieName=", encodeURIComponent(this.movieName), "&amp;uploadURL=", encodeURIComponent(this.settings.upload_url), "&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string), "&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error), "&amp;httpSuccess=", encodeURIComponent(e), "&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout), "&amp;params=", encodeURIComponent(t), "&amp;filePostName=", encodeURIComponent(this.settings.file_post_name), "&amp;fileTypes=", encodeURIComponent(this.settings.file_types), "&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description), "&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit), "&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit), "&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit), "&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled), "&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url), "&amp;buttonWidth=", encodeURIComponent(this.settings.button_width), "&amp;buttonHeight=", encodeURIComponent(this.settings.button_height), "&amp;buttonText=", encodeURIComponent(this.settings.button_text), "&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding), "&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding), "&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style), "&amp;buttonAction=", encodeURIComponent(this.settings.button_action), "&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled), "&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)].join("")
    }, SWFUpload.prototype.getMovieElement = function () {
        if (void 0 == this.movieElement && (this.movieElement = document.getElementById(this.movieName)), null === this.movieElement) throw"Could not find Flash element";
        return this.movieElement
    }, SWFUpload.prototype.buildParamString = function () {
        var t = this.settings.post_params, e = [];
        if ("object" == typeof t) for (var s in t) t.hasOwnProperty(s) && e.push(encodeURIComponent(s.toString()) + "=" + encodeURIComponent(t[s].toString()));
        return e.join("&amp;")
    }, SWFUpload.prototype.destroy = function () {
        try {
            this.cancelUpload(null, !1);
            var t = null;
            if (t = this.getMovieElement(), t && "unknown" == typeof t.CallFunction) {
                for (var e in t) try {
                    "function" == typeof t[e] && (t[e] = null)
                } catch (s) {
                }
                try {
                    t.parentNode.removeChild(t)
                } catch (n) {
                }
            }
            return window[this.movieName] = null, SWFUpload.instances[this.movieName] = null, delete SWFUpload.instances[this.movieName], this.movieElement = null, this.settings = null, this.customSettings = null, this.eventQueue = null, this.movieName = null, !0
        } catch (i) {
            return !1
        }
    }, SWFUpload.prototype.displayDebugInfo = function () {
        this.debug(["---SWFUpload Instance Info---\n", "Version: ", SWFUpload.version, "\n", "Movie Name: ", this.movieName, "\n", "Settings:\n", "	", "upload_url:               ", this.settings.upload_url, "\n", "	", "flash_url:                ", this.settings.flash_url, "\n", "	", "use_query_string:         ", this.settings.use_query_string.toString(), "\n", "	", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n", "	", "http_success:             ", this.settings.http_success.join(", "), "\n", "	", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n", "	", "file_post_name:           ", this.settings.file_post_name, "\n", "	", "post_params:              ", this.settings.post_params.toString(), "\n", "	", "file_types:               ", this.settings.file_types, "\n", "	", "file_types_description:   ", this.settings.file_types_description, "\n", "	", "file_size_limit:          ", this.settings.file_size_limit, "\n", "	", "file_upload_limit:        ", this.settings.file_upload_limit, "\n", "	", "file_queue_limit:         ", this.settings.file_queue_limit, "\n", "	", "debug:                    ", this.settings.debug.toString(), "\n", "	", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n", "	", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n", "	", "button_placeholder:       ", this.settings.button_placeholder ? "Set" : "Not Set", "\n", "	", "button_image_url:         ", this.settings.button_image_url.toString(), "\n", "	", "button_width:             ", this.settings.button_width.toString(), "\n", "	", "button_height:            ", this.settings.button_height.toString(), "\n", "	", "button_text:              ", this.settings.button_text.toString(), "\n", "	", "button_text_style:        ", this.settings.button_text_style.toString(), "\n", "	", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n", "	", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n", "	", "button_action:            ", this.settings.button_action.toString(), "\n", "	", "button_disabled:          ", this.settings.button_disabled.toString(), "\n", "	", "custom_settings:          ", this.settings.custom_settings.toString(), "\n", "Event Handlers:\n", "	", "swfupload_loaded_handler assigned:  ", ("function" == typeof this.settings.swfupload_loaded_handler).toString(), "\n", "	", "file_dialog_start_handler assigned: ", ("function" == typeof this.settings.file_dialog_start_handler).toString(), "\n", "	", "file_queued_handler assigned:       ", ("function" == typeof this.settings.file_queued_handler).toString(), "\n", "	", "file_queue_error_handler assigned:  ", ("function" == typeof this.settings.file_queue_error_handler).toString(), "\n", "	", "upload_start_handler assigned:      ", ("function" == typeof this.settings.upload_start_handler).toString(), "\n", "	", "upload_progress_handler assigned:   ", ("function" == typeof this.settings.upload_progress_handler).toString(), "\n", "	", "upload_error_handler assigned:      ", ("function" == typeof this.settings.upload_error_handler).toString(), "\n", "	", "upload_success_handler assigned:    ", ("function" == typeof this.settings.upload_success_handler).toString(), "\n", "	", "upload_complete_handler assigned:   ", ("function" == typeof this.settings.upload_complete_handler).toString(), "\n", "	", "debug_handler assigned:             ", ("function" == typeof this.settings.debug_handler).toString(), "\n"].join(""))
    }, SWFUpload.prototype.addSetting = function (t, e, s) {
        return this.settings[t] = void 0 == e ? s : e
    }, SWFUpload.prototype.getSetting = function (t) {
        return void 0 != this.settings[t] ? this.settings[t] : ""
    }, SWFUpload.prototype.callFlash = function (functionName, argumentArray) {
        argumentArray = argumentArray || [];
        var movieElement = this.getMovieElement(), returnValue, returnString;
        try {
            returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + "</invoke>"), returnValue = eval(returnString)
        } catch (ex) {
            throw"Call to " + functionName + " failed"
        }
        return void 0 != returnValue && "object" == typeof returnValue.post && (returnValue = this.unescapeFilePostParams(returnValue)), returnValue
    }, SWFUpload.prototype.selectFile = function () {
        this.callFlash("SelectFile")
    }, SWFUpload.prototype.selectFiles = function () {
        this.callFlash("SelectFiles")
    }, SWFUpload.prototype.startUpload = function (t) {
        this.callFlash("StartUpload", [t])
    }, SWFUpload.prototype.cancelUpload = function (t, e) {
        e !== !1 && (e = !0), this.callFlash("CancelUpload", [t, e])
    }, SWFUpload.prototype.stopUpload = function () {
        this.callFlash("StopUpload")
    }, SWFUpload.prototype.getStats = function () {
        return this.callFlash("GetStats")
    }, SWFUpload.prototype.setStats = function (t) {
        this.callFlash("SetStats", [t])
    }, SWFUpload.prototype.getFile = function (t) {
        return "number" == typeof t ? this.callFlash("GetFileByIndex", [t]) : this.callFlash("GetFile", [t])
    }, SWFUpload.prototype.addFileParam = function (t, e, s) {
        return this.callFlash("AddFileParam", [t, e, s])
    }, SWFUpload.prototype.removeFileParam = function (t, e) {
        this.callFlash("RemoveFileParam", [t, e])
    }, SWFUpload.prototype.setUploadURL = function (t) {
        this.settings.upload_url = t.toString(), this.callFlash("SetUploadURL", [t])
    }, SWFUpload.prototype.setPostParams = function (t) {
        this.settings.post_params = t, this.callFlash("SetPostParams", [t])
    }, SWFUpload.prototype.addPostParam = function (t, e) {
        this.settings.post_params[t] = e, this.callFlash("SetPostParams", [this.settings.post_params])
    }, SWFUpload.prototype.removePostParam = function (t) {
        delete this.settings.post_params[t], this.callFlash("SetPostParams", [this.settings.post_params])
    }, SWFUpload.prototype.setFileTypes = function (t, e) {
        this.settings.file_types = t, this.settings.file_types_description = e, this.callFlash("SetFileTypes", [t, e])
    }, SWFUpload.prototype.setFileSizeLimit = function (t) {
        this.settings.file_size_limit = t, this.callFlash("SetFileSizeLimit", [t])
    }, SWFUpload.prototype.setFileUploadLimit = function (t) {
        this.settings.file_upload_limit = t, this.callFlash("SetFileUploadLimit", [t])
    }, SWFUpload.prototype.setFileQueueLimit = function (t) {
        this.settings.file_queue_limit = t, this.callFlash("SetFileQueueLimit", [t])
    }, SWFUpload.prototype.setFilePostName = function (t) {
        this.settings.file_post_name = t, this.callFlash("SetFilePostName", [t])
    }, SWFUpload.prototype.setUseQueryString = function (t) {
        this.settings.use_query_string = t, this.callFlash("SetUseQueryString", [t])
    }, SWFUpload.prototype.setRequeueOnError = function (t) {
        this.settings.requeue_on_error = t, this.callFlash("SetRequeueOnError", [t])
    }, SWFUpload.prototype.setHTTPSuccess = function (t) {
        "string" == typeof t && (t = t.replace(" ", "").split(",")), this.settings.http_success = t, this.callFlash("SetHTTPSuccess", [t])
    }, SWFUpload.prototype.setAssumeSuccessTimeout = function (t) {
        this.settings.assume_success_timeout = t, this.callFlash("SetAssumeSuccessTimeout", [t])
    }, SWFUpload.prototype.setDebugEnabled = function (t) {
        this.settings.debug_enabled = t, this.callFlash("SetDebugEnabled", [t])
    }, SWFUpload.prototype.setButtonImageURL = function (t) {
        void 0 == t && (t = ""), this.settings.button_image_url = t, this.callFlash("SetButtonImageURL", [t])
    }, SWFUpload.prototype.setButtonDimensions = function (t, e) {
        this.settings.button_width = t, this.settings.button_height = e;
        var s = this.getMovieElement();
        void 0 != s && (s.style.width = t + "px", s.style.height = e + "px"), this.callFlash("SetButtonDimensions", [t, e])
    }, SWFUpload.prototype.setButtonText = function (t) {
        this.settings.button_text = t, this.callFlash("SetButtonText", [t])
    }, SWFUpload.prototype.setButtonTextPadding = function (t, e) {
        this.settings.button_text_top_padding = e, this.settings.button_text_left_padding = t, this.callFlash("SetButtonTextPadding", [t, e])
    }, SWFUpload.prototype.setButtonTextStyle = function (t) {
        this.settings.button_text_style = t, this.callFlash("SetButtonTextStyle", [t])
    }, SWFUpload.prototype.setButtonDisabled = function (t) {
        this.settings.button_disabled = t, this.callFlash("SetButtonDisabled", [t])
    }, SWFUpload.prototype.setButtonAction = function (t) {
        this.settings.button_action = t, this.callFlash("SetButtonAction", [t])
    }, SWFUpload.prototype.setButtonCursor = function (t) {
        this.settings.button_cursor = t, this.callFlash("SetButtonCursor", [t])
    }, SWFUpload.prototype.queueEvent = function (t, e) {
        void 0 == e ? e = [] : e instanceof Array || (e = [e]);
        var s = this;
        if ("function" == typeof this.settings[t]) this.eventQueue.push(function () {
            this.settings[t].apply(this, e)
        }), setTimeout(function () {
            s.executeNextEvent()
        }, 0); else if (null !== this.settings[t]) throw"Event handler " + t + " is unknown or is not a function"
    }, SWFUpload.prototype.executeNextEvent = function () {
        var t = this.eventQueue ? this.eventQueue.shift() : null;
        "function" == typeof t && t.apply(this)
    }, SWFUpload.prototype.unescapeFilePostParams = function (t) {
        var e, s = /[$]([0-9a-f]{4})/i, n = {};
        if (void 0 != t) {
            for (var i in t.post) if (t.post.hasOwnProperty(i)) {
                e = i;
                for (var o; null !== (o = s.exec(e));) e = e.replace(o[0], String.fromCharCode(parseInt("0x" + o[1], 16)));
                n[e] = t.post[i]
            }
            t.post = n
        }
        return t
    }, SWFUpload.prototype.testExternalInterface = function () {
        try {
            return this.callFlash("TestExternalInterface")
        } catch (t) {
            return !1
        }
    }, SWFUpload.prototype.flashReady = function () {
        var t = this.getMovieElement();
        return t ? (this.cleanUp(t), void this.queueEvent("swfupload_loaded_handler")) : void this.debug("Flash called back ready but the flash movie can't be found.")
    }, SWFUpload.prototype.cleanUp = function (t) {
        try {
            if (this.movieElement && "unknown" == typeof t.CallFunction) {
                this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
                for (var e in t) try {
                    "function" == typeof t[e] && (t[e] = null)
                } catch (s) {
                }
            }
        } catch (n) {
        }
        window.__flash__removeCallback = function (t, e) {
            try {
                t && (t[e] = null)
            } catch (s) {
            }
        }
    }, SWFUpload.prototype.fileDialogStart = function () {
        this.queueEvent("file_dialog_start_handler")
    }, SWFUpload.prototype.fileQueued = function (t) {
        t = this.unescapeFilePostParams(t), this.queueEvent("file_queued_handler", t)
    }, SWFUpload.prototype.fileQueueError = function (t, e, s) {
        t = this.unescapeFilePostParams(t), this.queueEvent("file_queue_error_handler", [t, e, s])
    }, SWFUpload.prototype.fileDialogComplete = function (t, e, s) {
        this.queueEvent("file_dialog_complete_handler", [t, e, s])
    }, SWFUpload.prototype.uploadStart = function (t) {
        t = this.unescapeFilePostParams(t), this.queueEvent("return_upload_start_handler", t)
    }, SWFUpload.prototype.returnUploadStart = function (t) {
        var e;
        if ("function" == typeof this.settings.upload_start_handler) t = this.unescapeFilePostParams(t), e = this.settings.upload_start_handler.call(this, t); else if (void 0 != this.settings.upload_start_handler) throw"upload_start_handler must be a function";
        void 0 === e && (e = !0), e = !!e, this.callFlash("ReturnUploadStart", [e])
    }, SWFUpload.prototype.uploadProgress = function (t, e, s) {
        t = this.unescapeFilePostParams(t), this.queueEvent("upload_progress_handler", [t, e, s])
    }, SWFUpload.prototype.uploadError = function (t, e, s) {
        t = this.unescapeFilePostParams(t), this.queueEvent("upload_error_handler", [t, e, s])
    }, SWFUpload.prototype.uploadSuccess = function (t, e, s) {
        t = this.unescapeFilePostParams(t), this.queueEvent("upload_success_handler", [t, e, s])
    }, SWFUpload.prototype.uploadComplete = function (t) {
        t = this.unescapeFilePostParams(t), this.queueEvent("upload_complete_handler", t)
    }, SWFUpload.prototype.debug = function (t) {
        this.queueEvent("debug_handler", t)
    }, SWFUpload.prototype.debugMessage = function (t) {
        if (this.settings.debug) {
            var e, s = [];
            if ("object" == typeof t && "string" == typeof t.name && "string" == typeof t.message) {
                for (var n in t) t.hasOwnProperty(n) && s.push(n + ": " + t[n]);
                e = s.join("\n") || "", s = e.split("\n"), e = "EXCEPTION: " + s.join("\nEXCEPTION: "), SWFUpload.Console.writeLine(e)
            } else SWFUpload.Console.writeLine(t)
        }
    }, SWFUpload.Console = {}, SWFUpload.Console.writeLine = function (t) {
        var e, s;
        try {
            e = document.getElementById("SWFUpload_Console"), e || (s = document.createElement("form"), document.getElementsByTagName("body")[0].appendChild(s), e = document.createElement("textarea"), e.id = "SWFUpload_Console", e.style.fontFamily = "monospace", e.setAttribute("wrap", "off"), e.wrap = "off", e.style.overflow = "auto", e.style.width = "700px", e.style.height = "350px", e.style.margin = "5px", s.appendChild(e)), e.value += t + "\n", e.scrollTop = e.scrollHeight - e.clientHeight
        } catch (n) {
            alert("Exception: " + n.name + " Message: " + n.message)
        }
    }, module.exports = SWFUpload
});
;define("disk-system:widget/plugin/uploader/uploadUtil/interactive.js", function (e, t, n) {
    var o, r, i = e("base:widget/libs/jquerypacket.js"),
        c = (e("base:widget/libs/underscore.js"), e("disk-system:widget/plugin/uploader/context.js"), e("disk-system:widget/plugin/uploader/context.js").getContext()),
        a = e("base:widget/storage/storage.js");
    o = {
        urlConf: {
            locateUpload: "//pcs.baidu.com/rest/2.0/pcs/file?method=locateupload",
            rapidUpload: "/api/rapidupload",
            precreate: "/api/precreate",
            createFile: "/api/create?isdir=0"
        },
        conf: {
            initBack: [],
            startInit: !1,
            endInit: !1,
            defaultServerHost: "c4.pcs.baidu.com",
            serverHost: "c4.pcs.baidu.com",
            serverTime: null,
            clientIp: null,
            timeoutLimit: 1e4
        },
        util: {
            init: function (e) {
                return o.conf.endInit ? void("function" == typeof e && e()) : (o.conf.initBack.push(e), void(o.conf.startInit || (o.conf.startInit = !0, o.util.locateUpload(), setTimeout(function () {
                    o.util.initFunc()
                }, 2e3))))
            }, locateUpload: function () {
                if ("undefined" != typeof a && a.getItem("locateUpload")) {
                    var e;
                    try {
                        if (e = i.parseJSON(a.getItem("locateUpload")), +new Date - e.timestamp < 6e5) return i.extend(o.conf, {
                            serverUrlIndex: 0,
                            clientIp: e.client_ip,
                            serverHost: e.server[0],
                            serverUrlList: e.server
                        }), void o.util.initFunc();
                        a.removeItem("locateUpload")
                    } catch (t) {
                        a.removeItem("locateUpload")
                    }
                }
                i.get(o.urlConf.locateUpload, function (e) {
                    if ("string" == typeof e) try {
                        e = i.parseJSON(e)
                    } catch (t) {
                    }
                    null != e.server && (i.extend(o.conf, {
                        serverUrlIndex: 0,
                        clientIp: e.client_ip,
                        serverHost: e.server[0],
                        serverUrlList: e.server
                    }), o.conf.serverUrlList.push(o.conf.defaultServerHost), o.util.initFunc(), "undefined" != typeof a && (e.timestamp = +new Date, a.setItem("locateUpload", i.stringify(e))))
                })
            }, setServerUrl: function () {
                o.conf.serverUrl = "//" + o.conf.serverHost + "/rest/2.0/pcs/superfile2?method=upload", "undefined" != typeof a && a.getItem("uploadUrl") && (o.conf.serverUrl = a.getItem("uploadUrl")), o.conf.serverUrl += "&app_id=250528&channel=chunlei&clienttype=0&web=1&BDUSS=" + (c.data.user.XDUSS || yunData.MYBDUSS), o.conf.serverUrl += "&logid=" + o.util.getLogId()
            }, initFunc: function () {
                if (!o.conf.endInit) {
                    o.util.setServerUrl(), o.conf.endInit = !0;
                    for (var e = 0, t = o.conf.initBack.length; t > e; e++) "function" == typeof o.conf.initBack[e] && o.conf.initBack[e]()
                }
            }, reLocateUpload: function () {
                var e = o.conf.serverUrlList;
                return null != e && null != o.conf.serverUrlIndex && o.conf.serverUrlIndex++ < e.length - 1 ? (o.conf.serverHost = e[o.conf.serverUrlIndex], o.util.setServerUrl(), !0) : !1
            }, detectConnection: function (e) {
                o.conf.xhr || (o.conf.xhr = new XMLHttpRequest);
                var t = o.conf.xhr;
                t.onreadystatechange = function () {
                    4 === t.readyState && (0 === t.status ? o.util.reLocateUpload() ? o.util.detectConnection(e) : "function" == typeof e.fail && e.fail() : (o.conf.xhr & o.conf.xhr.abort(), "function" == typeof e.success && e.success()))
                };
                try {
                    t.open("POST", o.conf.serverUrl, !0), t.withCredentials = !0, t.send(new FormData)
                } catch (n) {
                    "function" == typeof e.fail && e.fail()
                }
            }, rapidUpload: function (e, t) {
                var n = !1;
                setTimeout(function () {
                    n || e.callback && e.callback({})
                }, o.conf.timeoutLimit);
                var r = o.urlConf.rapidUpload;
                if (t && (r += "?" + t), "undefined" != typeof localStorage && localStorage.getItem("noRapidUpload")) return n = !0, void e.callback("", r, {});
                var c = {path: e.path, "content-length": e.size, "content-md5": e.contentMD5, "slice-md5": e.sliceMD5};
                c = o.util.formatTime(e, c), i.post(r, c, function (t, o, i) {
                    n = !0, e.callback(t, r, i)
                }, "json").error(function (t) {
                    n = !0, e.callback("", r, t)
                })
            }, precreate: function (e) {
                var t = e.path, n = e.file,
                    r = e.blockList && "object" == typeof e.blockList ? i.stringify(e.blockList) : "string" == typeof e.blockList ? e.blockList : "[]",
                    c = {path: t, autoinit: 1, uploadid: e.uploadid, uploadsign: e.uploadsign, block_list: r};
                c = o.util.formatTime(n, c), i.post(o.urlConf.precreate, c, function (t, n, r) {
                    e.callback(t, o.urlConf.precreate, r)
                }, "json").error(function (t) {
                    e.callback("", o.urlConf.precreate, t)
                })
            }, formatTime: function (e, t) {
                return e && e.lastModified ? t.local_mtime = parseInt(e.lastModified / 1e3, 10) : e.creationdate && e.modificationdate ? (t.local_ctime = parseInt(Date.parse(e.creationdate) / 1e3, 10), t.local_mtime = parseInt(Date.parse(e.modificationdate) / 1e3, 10)) : (e && e.local_ctime && (t.local_ctime = parseInt(e.local_ctime / 1e3, 10)), e && e.local_mtime && (t.local_mtime = parseInt(e.local_mtime / 1e3, 10))), t
            }, create: function (e, t) {
                var n = e.blockList && "object" == typeof e.blockList ? i.stringify(e.blockList) : "string" == typeof e.blockList ? e.blockList : "[]",
                    r = !1;
                setTimeout(function () {
                    r || e.callback && e.callback({})
                }, o.conf.timeoutLimit);
                var c = o.urlConf.createFile;
                t && (c = o.urlConf.createFile + "&" + t);
                var a = {path: e.path, size: e.size, uploadid: e.uploadid, uploadsign: e.uploadsign, block_list: n};
                a = o.util.formatTime(e, a), i.post(c, a, function (t, n, o) {
                    r = !0, e.callback(t, c, o)
                }, "json").error(function (t) {
                    r = !0, e.callback("", c, t)
                })
            }, getLogId: function () {
                var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/~！@#￥%……&",
                    t = String.fromCharCode, n = function (e) {
                        if (e.length < 2) {
                            var n = e.charCodeAt(0);
                            return 128 > n ? e : 2048 > n ? t(192 | n >>> 6) + t(128 | 63 & n) : t(224 | n >>> 12 & 15) + t(128 | n >>> 6 & 63) + t(128 | 63 & n)
                        }
                        var n = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                        return t(240 | n >>> 18 & 7) + t(128 | n >>> 12 & 63) + t(128 | n >>> 6 & 63) + t(128 | 63 & n)
                    }, o = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, r = function (e) {
                        return (e + "" + Math.random()).replace(o, n)
                    }, i = function (t) {
                        var n = [0, 2, 1][t.length % 3],
                            o = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0),
                            r = [e.charAt(o >>> 18), e.charAt(o >>> 12 & 63), n >= 2 ? "=" : e.charAt(o >>> 6 & 63), n >= 1 ? "=" : e.charAt(63 & o)];
                        return r.join("")
                    }, a = function (e) {
                        return e.replace(/[\s\S]{1,3}/g, i)
                    }, l = function () {
                        return a(r((new Date).getTime()))
                    }, s = function (e, t) {
                        return t ? l(String(e)).replace(/[+\/]/g, function (e) {
                            return "+" === e ? "-" : "_"
                        }).replace(/=/g, "") : l(String(e))
                    };
                return s(c.tools.baseService.getCookie("BAIDUID"))
            }
        }
    }, r = {
        rapidUpload: o.util.rapidUpload,
        precreate: o.util.precreate,
        create: o.util.create,
        conf: o.conf,
        init: o.util.init,
        detectConnection: o.util.detectConnection
    }, o.util.init(), n.exports = r
});
;define("disk-system:widget/plugin/uploader/uploadUtil/h5Uploader/uploadStorageInfo.js", function (e, o, t) {
    var n, a, i = e("base:widget/storage/storage.js");
    "undefined" != typeof i && "undefined" != typeof JSON && (n = {
        conf: {
            storageKey: "pan_uploader_info",
            expire: 6048e5,
            info: null
        }, util: {
            init: function () {
                n.conf.info = n.util.getAllStorageInfo(), "object" != typeof sessionStorage || i.overwrite || sessionStorage.setItem(n.conf.storageKey, "")
            }, getAllStorageInfo: function () {
                if (i && JSON) {
                    var e = i.getItem(n.conf.storageKey);
                    return e ? JSON.parse(e) : {}
                }
            }, getStorageInfoForFile: function (e) {
                var o = n.util.getFileMark(e), t = n.conf.info[o];
                if (t && t.uploadId && "object" == typeof sessionStorage) {
                    var a = sessionStorage.getItem(n.conf.storageKey);
                    if (a && -1 !== a.indexOf(t.uploadId)) return {
                        uploadId: t.uploadId,
                        chunkMD5s: t.chunkMD5s,
                        haveSame: !0
                    };
                    a = a + ";" + t.uploadId, sessionStorage.setItem(n.conf.storageKey, a)
                }
                return t
            }, setStorageInfo: function (e, o) {
                if (!(e.size <= 262144) && "undefined" != typeof i && "undefined" != typeof JSON) {
                    var t = n.util.getFileMark(e), a = (new Date).getTime(), r = n.conf.info;
                    for (var s in r) if (r.hasOwnProperty(s)) {
                        var f = r[s];
                        a - f.date > n.conf.expire && delete r[s]
                    }
                    r[t] = {date: a, uploadId: e.uploadId, chunkMD5s: e.chunkMD5s};
                    var d = JSON.stringify(r);
                    if (i.setItem(n.conf.storageKey, d), o && "object" == typeof sessionStorage) {
                        var g = sessionStorage.getItem(n.conf.storageKey);
                        g || (g = ""), -1 === g.indexOf(e.uploadId) && (g = g + ";" + e.uploadId, sessionStorage.setItem(n.conf.storageKey, g))
                    }
                }
            }, deleteInfo: function (e) {
                if (i && JSON) {
                    var o = n.util.getFileMark(e), t = (new Date).getTime(), a = n.conf.info, r = a[o] && a[o].uploadId;
                    delete a[o];
                    for (var s in a) if (a.hasOwnProperty(s)) {
                        var f = a[s];
                        t - f.date > n.conf.expire && delete f
                    }
                    var d = JSON.stringify(a);
                    if (i.setItem(n.conf.storageKey, d), "object" == typeof sessionStorage) {
                        var g = sessionStorage.getItem(n.conf.storageKey);
                        g && -1 !== g.indexOf(r) && (g = g.replace(";" + r, ""), sessionStorage.setItem(n.conf.storageKey, g))
                    }
                }
            }, getFileMark: function (e) {
                return e.sMD5 && e.path ? e.lastModified + "-" + e.size + "-" + e.sMD5 + "-" + e.path : void 0
            }
        }
    }, a = {
        setUploadInfo: n.util.setStorageInfo,
        deleteUploadInfo: n.util.deleteInfo,
        getUploadInfo: n.util.getStorageInfoForFile
    }, n.util.init(), t.exports = a)
});
;define("disk-system:widget/plugin/uploader/uploadUtil/h5Uploader/h5Forms.js", function (t, i, e) {
    var o = t("base:widget/libs/jquerypacket.js"), n = t("disk-system:widget/plugin/uploader/context.js").getContext(),
        r = function (t, i) {
            this.button = t, this.mode = i, this.selectFileInput = [], this.init()
        };
    r._count = 0, r.getCount = function () {
        return "h5Input" + r._count++
    }, r.prototype = {
        init: function () {
            if (void 0 !== this.button) if (-90 === this.mode) this.initForDirectory(); else {
                var t = -110 === this.mode ? !0 : !1;
                this.initForm(this.button.dom, t)
            }
        }, detectSupportDirectory: function () {
            var t = document.createElement("input");
            return t.type = "file", "webkitdirectory" in t && "multiple" in t ? !0 : !1
        }, initForDirectory: function () {
            if ("function" != typeof this.button.change || !this.detectSupportDirectory()) return this.mode = -110, void this.initForm(this.button.dom, !0);
            this.button.change({
                type: "dropdown",
                icon: "icon-upload",
                title: "上传",
                menu: [{title: "上传文件"}, {title: "上传文件夹"}]
            });
            var t = this.button.getMenuDom(0), i = this.button.getMenuDom(1);
            this.initForm(this.button.dom.mainButton, !0), this.initForm(t, !0), this.initForm(i, !0, !0)
        }, initForm: function (t, i, e) {
            var s = this, u = r.getCount();
            i = i ? " multiple" : "", e = e ? "webkitdirectory" : "";
            var l = e ? "点击选择文件夹" : "点击选择文件";
            o(t).addClass("upload-wrapper");
            var c = '<input title="' + l + '" id="' + u + '"' + i + " " + e + ' accept="*/*" type="file" name="html5uploader" style="position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;cursor:pointer;" />',
                d = '<form class="h5-uploader-form" action="javascript:void(0);">' + c + "</form>";
            o(t).append(d);
            var p = document.getElementById(u);
            p.onclick = function (t) {
                n.log.send(e ? {
                    name: "upload_dir_btn_click_h5",
                    value: "h5上传文件夹按钮点击",
                    sendServerLog: !0
                } : {name: "upload_file_btn_click_h5", value: "h5上传文件按钮点击", sendServerLog: !0}), t.stopPropagation()
            }, p.onchange = function (t) {
                t.preventDefault(), "" === e ? s.onAddFiles(this.files, t.target.files) : s.onAddDirectory(this.files), this.form && this.form.reset()
            }, "" === e && this.selectFileInput.push(p)
        }, setFileTypes: function (t) {
            for (var i = 0, e = this.selectFileInput.length; e > i; i++) this.selectFileInput[i].setAttribute("accept", t)
        }, onAddFiles: function () {
        }, onAddDirectory: function () {
        }
    }, e.exports = r
});
;define("disk-system:widget/plugin/uploader/uploadUtil/h5Uploader/fileHandler.js", function (e, r, t) {
    if ("undefined" != typeof File) {
        var n = {
            conf: {
                chunkSize: 4194304,
                blobSlice: File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice,
                workerUrl: "/box-static/disk-system/widget/plugin/uploader/uploadUtil/h5Uploader/_nomd5_nomod_nopack/file.js?t=1516328981905",
                workers: []
            }, util: {
                init: function () {
                    var e = new Worker(n.conf.workerUrl);
                    e.free = !0, n.conf.workers.push(e)
                }, getAFreeWorker: function (e) {
                    "undefined" == typeof e && (e = 0);
                    var r = n.conf.workers[e];
                    if (void 0 === r) {
                        var t = new Worker(n.conf.workerUrl);
                        return t.free = !0, n.conf.workers.push(t), t
                    }
                    return r.free ? r : n.util.getAFreeWorker(++e)
                }, calculateMD5: function (e, r) {
                    var t = n.util.getAFreeWorker();
                    t.free = !1;
                    var a = ((new Date).getTime(), new FileReader);
                    if ("undefined" != typeof a.readAsBinaryString) {
                        var i = n.conf.blobSlice,
                            o = localStorage && parseInt(localStorage.getItem("upload_chunk_size"), 10),
                            l = o || n.conf.chunkSize, c = Math.ceil(e.size / l), u = 0, s = function () {
                                var r = u * l, t = r + l >= e.size ? e.size : r + l;
                                if (!(r >= t)) try {
                                    a.readAsBinaryString(i.call(e, r, t))
                                } catch (n) {
                                    setTimeout(function () {
                                        a.readAsBinaryString(i.call(e, r, t))
                                    }, 100)
                                }
                            };
                        a.onload = function (e) {
                            t.postMessage(e.target.result), u++, u >= c && t.postMessage("dataEnd")
                        }, t.onmessage = function (e) {
                            "appendEnd" === e.data ? s() : (t.free = !0, r && r(e.data))
                        }, s()
                    }
                }, calculateMD5ForFirstSize: function (e, r) {
                    var t = !1;
                    if (e.size < 262144) return t = !0, r && r(null), !1;
                    var a = new FileReader;
                    if ("undefined" == typeof a.readAsBinaryString) return t = !0, void(r && r(null));
                    var i = ((new Date).getTime(), n.conf.blobSlice), o = n.util.getAFreeWorker();
                    o.free = !1, o.onmessage = function (e) {
                        "appendEnd" === e.data || t || (o.free = !0, t = !0, r && r(e.data))
                    }, a.onload = function (e) {
                        o.postMessage(e.target.result), o.postMessage("dataEnd")
                    }, setTimeout(function () {
                        t === !1 && (t = !0, r && r(null))
                    }, 15e3), a.readAsBinaryString(i.call(e, 0, 262144))
                }, calculateMD5ForEveryChunk: function (e, r) {
                    var t = e.chunkMD5s ? e.chunkMD5s : [], a = ((new Date).getTime(), new FileReader);
                    if ("undefined" != typeof a.readAsBinaryString) {
                        var i = n.conf.blobSlice,
                            o = localStorage && parseInt(localStorage.getItem("upload_chunk_size"), 10),
                            l = o || n.conf.chunkSize, c = Math.ceil(e.size / l), u = 0, s = n.util.getAFreeWorker();
                        t.length = c, e.chunkMD5s = t, s.free = !1;
                        var d = function () {
                            if (void 0 !== t[u]) return void(c > u && (u++, d()));
                            if (u >= c) return void(r && r(t));
                            var n = u * l, o = n + l >= e.size ? e.size : n + l;
                            n >= o || a.readAsBinaryString(i.call(e, n, o))
                        };
                        s.onmessage = function (e) {
                            "appendEnd" !== e.data && (t[u - 1] = e.data, c > u ? d() : (s.free = !0, r && r(t)))
                        }, a.onload = function (e) {
                            s.postMessage(e.target.result), s.postMessage("dataEnd"), u++
                        }, d()
                    }
                }, getFragment: function () {
                }
            }
        }, a = {
            calculateMD5: n.util.calculateMD5,
            calculateMD5ForFirstSize: n.util.calculateMD5ForFirstSize,
            calculateMD5ForEveryChunk: n.util.calculateMD5ForEveryChunk
        };
        t.exports = a
    }
});
;define("disk-system:widget/plugin/uploader/uploadUtil/nativeUploader/nativeUploader.js", function (e, t, n) {
    var i = e("disk-system:widget/plugin/uploader/context.js"),
        a = (i.getContext(), e("base:widget/libs/jquerypacket.js")), o = function (e) {
            this.button = e, this.autoUpload = !0, this.fileQueue = [], this.uploadIndex = 0, this.userActive = !1, this.tryInitKernalCount = 0, this.isFolderSelectMode = !1, o.currentInstance = this, null === o.nativeKernal && (this.installActiveDom(), this.nativeKernal = o.nativeKernal, this.initKernalEvent()), this.nativeKernal = o.nativeKernal, this.isUploading = !1, this.initButton()
        };
    o.ACTIVEX_ORIGIN_HOST = "pan.baidu.com", o.ACTIVEX_SERVER_HOST = "c.pcs.baidu.com", o._NUID = "native_plugin_uploader_handler", o.FEATURE_FOLDER_UPLOAD = "folder_upload", o.FILE_STATUS_PENDING = 0, o.FILE_STATUS_UPLOADING = 1, o.FILE_STATUS_PAUSE = 2, o.FILE_STATUS_COMPLETE = 3, o.FILE_STATUS_INCOMPLETE = 4, o.FILE_STATUS_ABORT = 5, o.FILE_STATUS_ERROR = 6, o.currentInstance = null, o.nativeKernal = null, o.statusMsg = {
        "-110": "超过1G限制",
        "-1005": "超过4G限制",
        "-999": "剩余空间不足",
        "-120": "文件大小为空",
        "-998": "网络错误",
        "-990": "准备上传&hellip;",
        "-991": "读取文件&hellip;",
        "-1002": "文件不存在",
        "-1003": "文件不合法",
        "-1013": "超过1000个文件",
        "-1015": "超过5000个文件",
        "-1009": "任务已存在",
        "-9999": "网络断开",
        31047: "请重新登录"
    }, o.isPlatformCompatible = function () {
        var e = navigator.platform;
        return 0 == e.toLowerCase().indexOf("win32")
    }, o.hasPlugin = function () {
        var e = null;
        /MSIE\s([^;]+)/.test(navigator.userAgent) || console.log(navigator.plugins["Shockwave Flash"]);
        try {
            e = new ActiveXObject("ieUploader.UploadCtl.1"), o.briefVersion = e.GetVersion()
        } catch (t) {
            for (var n = null, i = navigator.plugins, a = 0, l = i.length; l > a; a++) {
                var n = i[a].name || i[a].filename;
                if (-1 != n.indexOf("npUploader")) {
                    e = i[a], /(\d+(\.\d+)+)/.test(e.description) && (o.briefVersion = RegExp.$1);
                    break
                }
            }
        }
        return null != e
    }, o.getTipContent = function () {
        return '<span node-type="msg-text" class="nativeupload-text">您的浏览器支持极速上传！4G大文件高速秒传，支持文件夹上传，断点续传随心所欲！</span><a class="g-button nativeupload-download" node-type="download-link" href="http://issuecdn.baidupcs.com/issue/netdisk/guanwangsucai/UploadPlugin_2.0.0.3.exe"><span class="g-button-right"><span class="nativeupload-text">下载安装</span></span></a>'
    }, o.check = function () {
        if (navigator.userAgent.indexOf("Chrome") > -1) {
            var t = navigator.userAgent.match(/Chrome\/(\d+)/);
            t && parseInt(t[1], 10) >= 42
        }
        if (/Trident\/[789]\.0/i.test(navigator.userAgent)) return !1;
        if (!o.isPlatformCompatible()) return !1;
        if (!o.hasPlugin()) {
            if (-1 === navigator.userAgent.indexOf("Chrome")) {
                var n = e("disk-system:widget/plugin/uploader/context.js").getContext(),
                    i = e("base:widget/storage/storage.js");
                if (i && "1" !== i.getItem("pref_upload_ins_guide")) {
                    var a = n.toolbar.setTipContent({
                        content: o.getTipContent(),
                        styleType: 0,
                        className: "JS-nativeupload-tip",
                        onClose: function () {
                            n.toolbar.prevDom(!1), i.setItem("pref_upload_ins_guide", 1)
                        }
                    });
                    n.toolbar.prevDom(a, !0)
                }
            }
            return !1
        }
        return !0
    }, o.prototype = {
        initButton: function () {
            var e = this.button, t = this;
            e && e.change && (e.change({
                type: "dropdown",
                icon: "icon-speed",
                title: "上传",
                className: "upload-wrapper",
                padding: [10, 10],
                menu: [{
                    title: "上传文件", click: function () {
                        t.choosingFiles()
                    }
                }, {
                    title: "上传文件夹", click: function () {
                        t.choosingFolder()
                    }
                }]
            }), e.dom.children().children().addClass("upload-wrapper"), e.dom.mainButton.click(function () {
                t.choosingFiles()
            }))
        }, installActiveDom: function () {
            var e = (document.createElement("div"), ""), t = null;
            return o.isPlatformCompatible() ? "undefined" != typeof document.body ? (t = document.getElementById(o._NUID), null == t && (e = document.createElement("div"), e.className = "native-plugin", e.style.overflow = "hidden", e.style.left = "-999em", e.style.top = "-999em", e.style.position = "absolute", e.style.width = "1px", e.style.height = "1px", document.body.appendChild(e), e.innerHTML = "undefined" != typeof window.attachEvent ? '<object id="' + o._NUID + '" classid="CLSID:0898BF38-B941-4113-8357-8F342D9652F6" hidden="true" viewastext></OBJECT>' : '<embed id="' + o._NUID + '" type="application/bd-npupload-plugin" width="0" height="0">', t = document.getElementById(o._NUID)), o.nativeKernal = t, t) : void 0 : t
        }, initKernalEvent: function () {
            if (null != this.nativeKernal) {
                if ("undefined" != typeof window.attachEvent) this.nativeKernal.attachEvent("InitEnd", this.eventBack.onInitEnd), this.nativeKernal.attachEvent("TaskListUpdate", this.eventBack.onTaskListUpdate), this.nativeKernal.attachEvent("MD5End", this.eventBack.onMD5End), this.nativeKernal.attachEvent("UploadProcess", this.eventBack.onUploadProcess), this.nativeKernal.attachEvent("UploadSucceed", this.eventBack.onUploadSucceed), this.nativeKernal.attachEvent("UploadError", this.eventBack.onUploadError), this.nativeKernal.attachEvent("UploadCompleted", this.eventBack.onUploadCompleted), this.nativeKernal.attachEvent("NetWorkConnectivity", this.eventBack.onNetWorkConnectivity), this.nativeKernal.attachEvent("UndoneFileModified", this.eventBack.onUndoneFileModified), this.nativeKernal.attachEvent("AddFileFailed", this.eventBack.onAddFileFailed), this.nativeKernal.attachEvent("AddNewFile", this.eventBack.onAddNewFile), this.nativeKernal.attachEvent("LockPause", this.eventBack.onLockPause), this.hasFeature(o.FEATURE_FOLDER_UPLOAD) && (this.nativeKernal.attachEvent("ReadFolderFiles", this.eventBack.onReadFolderFiles), this.nativeKernal.attachEvent("FolderError", this.eventBack.onFolderError), this.nativeKernal.attachEvent("FolderSuccessUploadFileCount", this.eventBack.onFolderSuccessUploadFileCount)); else {
                    var e = this;
                    if (window.globalNativeUploadHandler = this.eventBack, "undefined" == typeof this.nativeKernal.AddEvent) {
                        if (this.tryInitKernalCount > 50) return;
                        return setTimeout(function () {
                            e.initKernalEvent()
                        }, 100), void this.tryInitKernalCount++
                    }
                    this.tryInitKernalCount = 0, this.nativeKernal.AddEvent("InitEnd", "globalNativeUploadHandler.onInitEnd"), this.nativeKernal.AddEvent("NetWorkConnectivity", "globalNativeUploadHandler.onNetWorkConnectivity"), this.nativeKernal.AddEvent("TaskListUpdate", "globalNativeUploadHandler.onTaskListUpdate"), this.nativeKernal.AddEvent("AddFileFailed", "globalNativeUploadHandler.onAddFileFailed"), this.nativeKernal.AddEvent("UploadError", "globalNativeUploadHandler.onUploadError"), this.nativeKernal.AddEvent("UploadSucceed", "globalNativeUploadHandler.onUploadSucceed"), this.nativeKernal.AddEvent("UploadProcess", "globalNativeUploadHandler.onUploadProcess"), this.nativeKernal.AddEvent("MD5End", "globalNativeUploadHandler.onMD5End"), this.nativeKernal.AddEvent("UploadCompleted", "globalNativeUploadHandler.onUploadCompleted"), this.nativeKernal.AddEvent("AddNewFile", "globalNativeUploadHandler.onAddNewFile"), this.nativeKernal.AddEvent("UndoneFileModified", "globalNativeUploadHandler.onUndoneFileModified"), this.nativeKernal.AddEvent("LockPause", "globalNativeUploadHandler.onLockPause"), this.hasFeature(o.FEATURE_FOLDER_UPLOAD) && (this.nativeKernal.AddEvent("ReadFolderFiles", "globalNativeUploadHandler.onReadFolderFiles"), this.nativeKernal.AddEvent("FolderError", "globalNativeUploadHandler.onFolderError"), this.nativeKernal.AddEvent("FolderSuccessUploadFileCount", "globalNativeUploadHandler.onFolderSuccessUploadFileCount"))
                }
                if ("undefined" == typeof yunData.MYNAME) throw new Error("Can not resolve user unique key");
                this.nativeKernal.Init(yunData.MYNAME, o.ACTIVEX_ORIGIN_HOST, "BDUSS=" + yunData.MYBDUSS, o.ACTIVEX_SERVER_HOST)
            }
        }, versionCompare: function (e, t) {
            var n = e.split("."), i = t.split("."), a = n.length, o = i.length;
            if (a != o) return 0;
            for (var l = 0, s = 0, r = 0, d = a; d > r; r++) if (l = parseInt(n[r]), s = parseInt(i[r]), l != s) return l - s;
            return 0
        }, hasFeature: function (e) {
            switch (e) {
                case o.FEATURE_FOLDER_UPLOAD:
                    return this.versionCompare(this.getVersion(), "1.1.0.0") > 0
            }
            return !1
        }, getFileByFilePath: function (e, t) {
            for (var n = this.fileQueue, i = t === !0 ? 0 : this.uploadIndex - 1, a = i, o = n.length; o > a; a++) if (n[a] && n[a].path === e) return n[a];
            return null
        }, getVersion: function () {
            return this.nativeKernal ? this.nativeKernal.GetVersion() : null
        }, choosingFiles: function () {
            var e = this.onGetServerPath();
            e.lastIndexOf("/") < e.length - 1 && (e += "/"), o.currentInstance = this, this.userActive = !0, this.isFolderSelectMode = !1;
            try {
                this.nativeKernal.AddUploadFile(e)
            } catch (t) {
            }
        }, choosingFolder: function () {
            var e = this.onGetServerPath();
            e.lastIndexOf("/") < e.length - 1 && (e += "/"), o.currentInstance = this, this.userActive = !0, this.isFolderSelectMode = !0;
            try {
                this.nativeKernal.AddUploadFolder(e)
            } catch (t) {
            }
        }, parseDirInfo: function (e) {
            var t = e.length, n = e.substring(t - 1, t);
            return "\\" == n ? e.substring(0, t - 1) : null
        }, newFile: function (e, t, n, i) {
            var a = this.parseDirInfo(e), o = null != a, l = o ? a : e, s = l.substring(l.lastIndexOf("\\") + 1), r = s,
                d = r.lastIndexOf(".");
            -1 != d && (r = r.substring(d));
            var u = {name: s, type: r, server_path: t, progress: i, size: n, path: e, dir: o || 0};
            return u
        }, setFileStatus: function (e, t) {
            var n;
            switch (n = "number" == typeof e ? this.fileQueue[e] : e, t) {
                case o.FILE_STATUS_PENDING:
                case o.FILE_STATUS_UPLOADING:
                case o.FILE_STATUS_PAUSE:
                case o.FILE_STATUS_COMPLETE:
                case o.FILE_STATUS_INCOMPLETE:
                case o.FILE_STATUS_ABORT:
                case o.FILE_STATUS_ERROR:
                    n.status = t
            }
        }, getCodeMsg: function (e) {
            return e = "" + e, o.statusMsg[e] ? o.statusMsg[e] : void 0
        }, eventBack: {
            onInitEnd: function () {
            }, onTaskListUpdate: function () {
            }, onMD5End: function () {
            }, onUploadProcess: function (e, t, n, i) {
                var a = o.currentInstance, l = a.getFileByFilePath(e);
                a.onFileProgress(l, (100 * i).toFixed(2), 1024 * n * 8)
            }, onUploadSucceed: function (e, t, n, l) {
                var s = o.currentInstance;
                s.isUploading = !1;
                var r = s.getFileByFilePath(e);
                s.setFileStatus(r, o.FILE_STATUS_COMPLETE), l ? s.onFileSuccess(r, {msg: "极速秒传"}) : s.onFileSuccess(r), i.sendLog({
                    from: "NativeUploader",
                    success: 1,
                    uploadStyle: l,
                    averageSpeed: n,
                    filePath: e,
                    diskPath: t,
                    file: a.stringify(a.extend({}, r))
                }), s.fileQueue.length >= s.uploadIndex && s.upload()
            }, onUploadError: function (e, t, n) {
                var l = (Array.prototype.slice.call(arguments), o.currentInstance);
                l.isUploading = !1;
                var s = l.getFileByFilePath(e);
                s.retry = !1, l.setFileStatus(s, o.FILE_STATUS_ERROR);
                var r = l.getCodeMsg(n) || n;
                l.onFileError(s, r, n, "pcs"), l.fileQueue.length >= l.uploadIndex && l.upload(), i.sendLog({
                    from: "NativeUploader",
                    success: 0,
                    reason: "UploadError",
                    errorCode: n,
                    filePath: e,
                    diskPath: t,
                    file: a.stringify(a.extend({}, s))
                })
            }, onUploadCompleted: function () {
            }, onNetWorkConnectivity: function () {
            }, onUndoneFileModified: function () {
            }, onAddFileFailed: function (e, t, n) {
                var l = o.currentInstance, s = l.onGetServerPath();
                s.lastIndexOf("/") < s.length - 1 && (s += "/"), (-1009 === t || "-1009" === t) && (e = "/exit/" + e);
                var r = this.onAddNewFile(e, l.onGetServerPath(), n, 0, !0), d = l.getCodeMsg(t) || t;
                l.onFileError(r, d), i.sendLog({
                    from: "NativeUploader",
                    success: 0,
                    reason: "AddFileFailed",
                    errorMsgOrCode: d,
                    file: a.stringify(a.extend({}, r))
                })
            }, onAddNewFile: function (e, t, n, i, a) {
                var l = o.currentInstance, s = l.newFile(e, t, i, n);
                return a === !0 ? (l.setFileStatus(s, o.FILE_STATUS_ERROR), s.retry = !1) : l.setFileStatus(s, o.FILE_STATUS_PENDING), s.index = l.fileQueue.length, l.fileQueue.push(s), l.onFileAccepted(s), s
            }, onLockPause: function (e, t, n) {
                var i = o.currentInstance, a = i.getFileByFilePath(e);
                i.onFileLocked(a, n)
            }, onReadFolderFiles: function (e, t, n, i) {
                var a = o.currentInstance, l = a.getFileByFilePath(e);
                if (l.allFilesNum = i, -1015 === n) {
                    var s = a.getCodeMsg(n) || n;
                    a.onFileError(l, s)
                }
                a.onFolderStatusChange(l, 0, i)
            }, onFolderError: function (e) {
                {
                    var t = o.currentInstance;
                    t.getFileByFilePath(e)
                }
            }, onFolderSuccessUploadFileCount: function (e, t, n) {
                var i = o.currentInstance, a = i.getFileByFilePath(e);
                i.onFolderStatusChange(a, n, a.allFilesNum)
            }
        }, checkInCompleteFile: function () {
            for (var e = 0, t = this.fileQueue.length; t > e; e++) {
                var n = this.fileQueue[e];
                if (n.status === o.FILE_STATUS_PENDING) return e
            }
            return !1
        }, upload: function (e, t) {
            "boolean" == typeof t && (this.autoUpload = t);
            var n, i = !1, a = !1;
            if ("number" == typeof e ? (n = this.fileQueue[e], this.uploadIndex = e) : "undefined" == typeof e ? (i = !0, n = this.fileQueue[this.uploadIndex]) : "object" == typeof e && (a = !0, n = e), this.isUploading) return void(!n || n.status !== o.FILE_STATUS_ERROR && n.status !== o.FILE_STATUS_PAUSE || (n.status = o.FILE_STATUS_PENDING, this.onFileInQueue(n)));
            if (n) this.uploadIndex = n.index, a || n.status === o.FILE_STATUS_PENDING || n.status === o.FILE_STATUS_ERROR && n.retry !== !1 ? (this.isUploading = !0, this.setFileStatus(n, o.FILE_STATUS_UPLOADING), n.resume ? (this.nativeKernal.ResumeUpload(n.path), this.onFileContinue(n)) : (this.nativeKernal.SetNetDiskPath(n.path, n.server_path), this.nativeKernal.StartUpload(n.path), this.onFileUploadStart(n), n.resume = !0), i && this.uploadIndex++) : i && (this.uploadIndex++, this.upload()); else {
                var l = this.checkInCompleteFile();
                l !== !1 && (this.uploadIndex = l, this.upload())
            }
        }, pause: function (e) {
            var t;
            t = "number" == typeof e ? this.fileQueue[e] : e, t && (this.nativeKernal.PauseUpload(t.path), t.status === o.FILE_STATUS_UPLOADING ? (t.status = o.FILE_STATUS_PAUSE, this.onFilePause(t), this.isUploading = !1, this.autoUpload && this.upload()) : (t.status = o.FILE_STATUS_PAUSE, this.onFilePause(t)))
        }, remove: function (e, t) {
            var n;
            n = "number" == typeof e ? this.fileQueue[e] : e, n && (this.nativeKernal.PauseUpload(n.path), n.status === o.FILE_STATUS_UPLOADING && (this.isUploading = !1, this.autoUpload && this.upload()), n.status = o.FILE_STATUS_CANCEL, t !== !0 && this.onFileRemoved(n))
        }, goOn: function (e) {
            this.upload(e)
        }, clearQueue: function () {
            for (var e = this.uploadIndex; e >= 0; e--) {
                var t = this.fileQueue[e];
                t && t.status === o.FILE_STATUS_UPLOADING && this.remove(t, !0)
            }
            this.uploadIndex = 0, this.fileQueue.length = 0;
            var n = this;
            setTimeout(function () {
                n.nativeKernal.ClearUserData()
            }, 500)
        }, hasUnComplete: function () {
            return this.userActive ? 0 : this.fileQueue.length
        }, onFileAccepted: function () {
        }, onFileRemoved: function () {
        }, onFileError: function () {
        }, onFileLocked: function () {
        }, onFileSuccess: function () {
        }, onFilePause: function () {
        }, onFileContinue: function () {
        }, onFileProgress: function () {
        }, onFolderStatusChange: function () {
        }, onFileUploadStart: function () {
        }, onGetServerPath: function () {
            return "/"
        }
    }, n.exports = o
});
;define("disk-system:widget/plugin/uploader/uploadUtil/flashUploader/flashUploader.js", function (require, exports, module) {
    var SWFUpload = require("disk-system:widget/plugin/uploader/uploadUtil/flashUploader/swfupload.js"),
        interActiveToServer = require("disk-system:widget/plugin/uploader/uploadUtil/interactive.js"),
        $ = require("base:widget/libs/jquerypacket.js"),
        contextUtil = require("disk-system:widget/plugin/uploader/context.js"), context = contextUtil.getContext(),
        FlashUploader = function (e, t, i) {
            this.autoUpload = !0, this.button = e, this.serverUrl = t, this.setMode(i), this.autoUpload = !0, this.fileQueue = [], this.clearNumber = 0, this.uploadIndex = 0, this.windowTitle = null, this.initFlashKernal(), this.createParams = "", this.isUploading = !1
        };
    FlashUploader.MUTIIPLE_MODE = -110, FlashUploader.SINGLE_MODE = -100, FlashUploader.FILE_STATUS_PENDING = -1, FlashUploader.FILE_STATUS_UPLOADING = -2, FlashUploader.FILE_STATUS_ERROR = -3, FlashUploader.FILE_STATUS_COMPLETE = -4, FlashUploader.FILE_STATUS_CANCEL = -5, FlashUploader.statusMsg = {
        "-90": "文件名不合法",
        "-110": "文件超出1G限制",
        "-120": "文件读取失败",
        9100: "功能被封禁",
        9200: "功能被封禁",
        9300: "功能被封禁",
        9400: "功能被封禁",
        9500: "功能被封禁",
        "010": "服务器错误"
    }, FlashUploader._count = 0, FlashUploader.getCount = function () {
        return FlashUploader._count++
    }, FlashUploader.check = function () {
        return FlashUploader.getFlashVersion() ? !0 : !1
    }, FlashUploader.getFlashVersion = function () {
        var f = null, n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0, len = n.plugins.length; len > ii; ii++) if (-1 != n.plugins[ii].name.indexOf("Shockwave Flash")) {
                f = n.plugins[ii].description.split("Shockwave Flash ")[1];
                break
            }
        } else if (window.ActiveXObject) for (var ii = 11; ii >= 2; ii--) try {
            var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
            if (fl) {
                f = ii + ".0";
                break
            }
        } catch (e) {
        }
        return f
    }, FlashUploader.SOURCE_URL = "/box-static/disk-system/widget/plugin/uploader/uploadUtil/flashUploader/swfupload_c0e5c70.swf", FlashUploader.prototype = {
        setMode: function (e) {
            (e === FlashUploader.MUTIIPLE_MODE || e === FlashUploader.SINGLE_MODE) && (this.mode = e)
        }, getFlashConfig: function () {
            var e = this, t = {}, i = {
                upload_url: this.serverUrl,
                button_width: 110,
                button_height: 35,
                prevent_swf_caching: !1,
                preserve_relative_urls: !1,
                file_queue_limit: "200",
                file_size_limit: "1 GB",
                button_window_mode: "transparent",
                requeue_on_error: !0,
                post_params: t,
                flash_url: FlashUploader.SOURCE_URL,
                button_cursor: SWFUpload.CURSOR.HAND,
                debug: !1,
                file_dialog_start_handler: function () {
                    e.setTitle()
                },
                file_queued_handler: function () {
                    var t = Array.prototype.slice.call(arguments);
                    e.eventAddNewFile.apply(e, t)
                },
                swfupload_loaded_handler: function () {
                    e.flashKernal.setFileQueueLimit(200)
                },
                file_queue_error_handler: function () {
                    var t = Array.prototype.slice.call(arguments);
                    e.eventAddFileFailed.apply(e, t)
                },
                upload_progress_handler: function () {
                    var t = Array.prototype.slice.call(arguments);
                    e.eventUploadProcess.apply(e, t)
                },
                upload_error_handler: function (t) {
                    var i = Array.prototype.slice.call(arguments);
                    e.eventUploadError.apply(e, i), contextUtil.sendLog({
                        from: "FlashUploader",
                        success: 0,
                        reason: "superfile2Fail",
                        file: $.stringify($.extend({}, t))
                    })
                },
                upload_success_handler: function () {
                    var t = Array.prototype.slice.call(arguments);
                    e.eventUploadSucceed.apply(e, t)
                }
            };
            return this.mode && (i.button_action = this.mode), i
        }, initFlashKernal: function () {
            this.windowTitle = document.title;
            var e = "flashUploader" + FlashUploader.getCount();
            this.button.dom.addClass("upload-wrapper");
            var t = $('<div style="position:absolute;top:0;left:0;width:' + this.button.width + "px;height:" + this.button.height + 'px;"><span id="' + e + '"></span></div>');
            this.button.dom.append(t);
            var i = this.getFlashConfig();
            i.button_width = this.button.width, i.button_height = this.button.height, i.button_placeholder_id = e, i.file_dialog_start_handler = function () {
                context.log.send({name: "upload_dir_btn_click_flash", value: "falsh上传文件夹按钮点击", sendServerLog: !0})
            }, this.flashKernal = new SWFUpload(i), t.bind("click", function (e) {
                e.stopPropagation()
            }), this.setTitle()
        }, setFileTypes: function (e, t) {
            t = t || "选择自定义类型文件", this.flashKernal.setFileTypes(e, t)
        }, setUrlParams: function (e) {
            if ("string" == typeof e && -1 !== e.indexOf("=")) {
                var t = e.substring(0, e.indexOf("="));
                if (-1 !== this.createParams.indexOf(t)) {
                    var i = new RegExp(t + "\\=[^&=]*", "ig");
                    this.createParams = this.createParams.replace(i, e)
                } else this.createParams.length ? this.createParams += "&" + e : this.createParams = e
            }
        }, handleFileData: function (e) {
            this.setTitle();
            var t = this, i = function (i, a, s) {
                var l = {};
                if (i && 0 === i.errno) e.uploadId = i.uploadid, e.uploadSign = i.uploadsign, t.compileUrl(e), t.flashKernal.startUpload(e.id); else {
                    var r = +i.errno, o = context.accountBan(r);
                    o.isBan && (i.errno = o.errno), t.eventUploadError(e, i.errno), l.success = 0, l.reason = "precreate"
                }
                "number" == typeof l.success && (l = $.extend(l, {
                    from: "FlashUploader",
                    ajaxurl: a,
                    ajaxstatus: s.status,
                    ajaxerrno: i.errno,
                    ajaxdata: $.stringify(i),
                    file: $.stringify($.extend({}, e))
                }), contextUtil.sendLog(l))
            }, a = {path: e.path, file: e, blockList: '["3b9a32584fa790f79bc43085627e4c33"]', callback: i};
            interActiveToServer.precreate(a)
        }, compileUrl: function (e) {
            var t = this.serverUrl + "&path=" + encodeURIComponent(e.path) + "&uploadid=" + (e.uploadId || 0) + "&uploadsign=" + (e.uploadSign || 0) + "&partseq=0";
            this.flashKernal.setUploadURL(t)
        }, createFileAtPan: function (e) {
            if (this.fileQueue.length) {
                var t = this, i = function (i, a, s) {
                    if (!i || 0 !== i.errno && "0" !== i.errno) {
                        var l = +i.errno, r = context.accountBan(l);
                        r.isBan && (i.errno = r.errno), t.onFileError(e, i.errno, i.errno, "netdisk", s.status)
                    } else e.fs_id = i.fs_id, e.md5 = i.md5, t.onFileSuccess(e);
                    contextUtil.sendLog({
                        from: "FlashUploader",
                        success: !i || 0 !== i.errno && "0" !== i.errno ? 0 : 1,
                        reason: i ? i.errno : 0,
                        ajaxurl: a,
                        ajaxstatus: s.status,
                        ajaxerrno: i.errno,
                        ajaxdata: $.stringify(i),
                        file: $.stringify($.extend({}, e))
                    })
                }, a = {
                    path: t.fileQueue[e.index].path,
                    size: e.size,
                    uploadid: e.uploadId,
                    uploadsign: e.uploadSign,
                    blockList: '["' + e.md5 + '"]',
                    callback: i
                };
                e && e.creationdate && (a.local_ctime = Date.parse(e.creationdate)), e && e.modificationdate && (a.local_mtime = Date.parse(e.modificationdate)), interActiveToServer.create(a, this.createParams)
            }
        }, getFileByIndex: function (e) {
            if ("number" == typeof e && e < this.fileQueue.length && e >= 0) {
                var t = this.flashKernal.getFile(this.fileQueue[e].id);
                return t && this.fileQueue[e].filestatus !== FlashUploader.FILE_STATUS_CANCEL && this.fileQueue[e].filestatus !== FlashUploader.FILE_STATUS_ERROR && (this.fileQueue[e].filestatus = t.filestatus), this.fileQueue[e]
            }
            return null
        }, eventAddNewFile: function (e) {
            e.server_path = this.onGetServerPath(), e.path = e.server_path.lastIndexOf("/") === e.server_path.length - 1 ? e.server_path + e.name : e.server_path + "/" + e.name, e.index = this.fileQueue.length, this.fileQueue.push(e), this.onFileAccepted(e), this.setTitle()
        }, eventAddFileFailed: function (e, t) {
            if (t == SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) return void context.ui.alert({body: "添加的文件过多，单次窗口最多可添加200个"});
            if (e) {
                e.filestatus = FlashUploader.FILE_STATUS_ERROR, e.retry = !1, this.eventAddNewFile(e), e && /[\\\/\:\*\?\"\<\>\|]/.test(e.name) && (t = "-90");
                var i = FlashUploader.statusMsg[t] || t;
                this.onFileError(e, i), this.setTitle(), contextUtil.sendLog({
                    from: "FlashUploader",
                    success: 0,
                    reason: "AddFileFailed",
                    errorMsgOrCode: i,
                    file: $.stringify($.extend({}, e))
                })
            }
        }, eventUploadProcess: function (e, t, i) {
            var a = this, s = e.index - this.clearNumber;
            e = this.getFileByIndex(s), e && (e.startProcess || (e.speed = [], e.startProcess = function () {
                e.progressInterval = setInterval(function () {
                    a.trueUploadProcess(e, e.complete, i, .5)
                }, 500)
            }, e.startProcess(), a.setTitle()), e.complete = t, t >= i && (clearInterval(e.progressInterval), a.trueUploadProcess(e, i, i, .5)))
        }, trueUploadProcess: function (e, t, i, a) {
            var s;
            s = t === i ? "100" : (t / i * 100).toFixed(2);
            var l;
            e = this.getFileByIndex(e.index), e && "undefined" == typeof e.lastComplete && (e.lastComplete = 0), l = (t - e.lastComplete) / (a || 1), l = 0 > l ? 0 : l, e.speed.length >= 10 && e.speed.shift(), e.speed.push(l);
            for (var r = 0, o = e.speed.length, n = 0; o > r; r++) n += e.speed[r];
            l = n / e.speed.length, e.lastComplete = t, this.onFileProgress(e, s, l)
        }, eventUploadSucceed: function (e, t) {
            this.isUploading = !1, this.autoUpload && this.upload(), "string" == typeof t && (t = $.parseJSON(t));
            var i = e.index - this.clearNumber;
            e = this.getFileByIndex(i), t.md5 ? (e.md5 = t.md5, this.createFileAtPan(e)) : (this.onFileError(e, "010", "010", "pcs", 200), contextUtil.sendLog({
                from: "FlashUploader",
                success: 0,
                reason: "nomd5",
                file: $.stringify($.extend({}, e))
            }))
        }, eventUploadError: function (e, t, i) {
            if (this.isUploading = !1, !e) return void(this.autoUpload && this.upload());
            if (e.filestatus !== FlashUploader.FILE_STATUS_CANCEL) {
                this.autoUpload && this.upload();
                var a = FlashUploader.statusMsg[t] || t, s = e.index - this.clearNumber;
                e = this.getFileByIndex(s), clearInterval(e.progressInterval), "string" != typeof i || /^\-?\d+$/.test(i) || (i = 0), this.onFileError(e, a, t, "pcs", i)
            }
        }, setTitle: function () {
            var e = this;
            /IE\s[678]/.test(navigator.userAgent) && this.windowSetIdle !== !1 && (setTimeout(function () {
                null != e.windowTitle && (document.title = e.windowTitle, e.windowSetIdle = !0)
            }, 500), this.windowSetIdle = !1)
        }, upload: function (e, t) {
            if ("boolean" == typeof t && (this.autoUpload = t), !this.isUploading) {
                var i, a = !1, s = !1;
                "number" == typeof e ? (i = this.getFileByIndex(e), this.uploadIndex = e) : "undefined" == typeof e ? (a = !0, i = this.getFileByIndex(this.uploadIndex)) : "object" == typeof e && (s = !0, i = e), i && i.id && (s || i.filestatus === FlashUploader.FILE_STATUS_PENDING || i.filestatus === FlashUploader.FILE_STATUS_ERROR && i.retry !== !1 ? (this.isUploading = !0, this.uploadingNum++, this.handleFileData(i), this.onFileUploadStart(i), a && this.uploadIndex++) : a && (this.uploadIndex++, this.upload()))
            }
        }, remove: function (e, t) {
            var i;
            i = "number" == typeof e ? this.getFileByIndex(e) : e, clearInterval(i.progressInterval), i && i.id && (this.flashKernal.cancelUpload(i.id), i.filestatus === FlashUploader.FILE_STATUS_UPLOADING && (this.isUploading = !1, this.autoUpload && !t && this.upload()), i.filestatus = FlashUploader.FILE_STATUS_CANCEL, t !== !0 && this.onFileRemoved(i))
        }, clearQueue: function () {
            for (var e = this.uploadIndex; e >= 0; e--) {
                var t = this.getFileByIndex(e);
                t && t.filestatus === FlashUploader.FILE_STATUS_UPLOADING && this.remove(t, !0)
            }
            this.clearNumber += this.fileQueue.length, this.uploadIndex = 0, this.fileQueue.length = 0, this.isUploading = !1, this.onQueueClear()
        }, onFileAccepted: function () {
        }, onFileRemoved: function () {
        }, onFileError: function () {
        }, onFileSuccess: function () {
        }, onFileProgress: function () {
        }, onFileUploadStart: function () {
        }, onQueueClear: function () {
        }, onGetServerPath: function () {
            return "/"
        }
    }, module.exports = FlashUploader
});
;define("disk-system:widget/plugin/uploader/uploadUtil/h5Uploader/h5Uploader.js", function (e, t, i) {
    var n = e("disk-system:widget/plugin/uploader/uploadUtil/interactive.js"),
        o = e("base:widget/libs/jquerypacket.js"),
        a = e("disk-system:widget/plugin/uploader/uploadUtil/h5Uploader/fileHandler.js"),
        r = e("disk-system:widget/plugin/uploader/context.js"), s = r.getContext(),
        l = e("disk-system:widget/plugin/uploader/uploadUtil/h5Uploader/h5Forms.js"),
        d = e("disk-system:widget/plugin/uploader/uploadUtil/h5Uploader/uploadStorageInfo.js"),
        u = e("base:widget/storage/storage.js"), p = window.yunData, c = function (e, t, i, n) {
            this.button = e, this.mode = i || c.MUTIIPLE_MODE, this.inputDom = null, this.initH5Form(), this.autoUpload = !0, this.fileQueue = [], this.uploadLimit = 3, this.chunkRetryLimit = 3, this.chunkThread = 5, this.uploadingNum = 0, this.uploadIndex = 0, this.createParams = "", this.alertDialog = null, n && this.initDrag(), 1 !== +p.ISVIP && (this.uploadLimit = 1)
        };
    c.MUTIIPLE_MODE = -110, c.SINGLE_MODE = -100, c.DIRECTORY_MODE = -90, c.QUEUE_LIMIT = 300, c.PC_QUEUE_LIMIT = 500, c.FILE_SIZE_LIMIT = 4294967296, c.FILE_SIZE_MAX = 21474836480, c.FILE_SIZE_MID = 10737418240, c.FILE_CHUNK_SIZE = 4194304, c.FILE_STATUS_PENDING = -1, c.FILE_STATUS_UPLOADING = -2, c.FILE_STATUS_COMPLETE = -4, c.FILE_STATUS_CANCEL = 5, c.FILE_STATUS_PAUSE = 6, c.FILE_STATUS_ERROR = -3, c.FILE_STATUS_FILEERROR = 0, c.statusMsg = {
        "-90": "文件名不合法",
        "-100": "文件大小为空",
        "-110": "文件最大限制为20G",
        "-111": "超出4G限制",
        "-112": "超出4G限制",
        "-113": "超出4G限制",
        "-114": "超出4G限制",
        "-130": "超出个数限制",
        "-1009": "任务已存在",
        9100: "功能被封禁",
        9200: "功能被封禁",
        9300: "功能被封禁",
        9400: "功能被封禁",
        9500: "功能被封禁",
        31047: "页面过期，请刷新",
        "010": "任务超时",
        "020": "服务器错误",
        "030": "链接超时"
    }, c.check = function () {
        return "undefined" != typeof File && "undefined" != typeof FileReader
    }, c._count = 0, c.getCount = function () {
        return c._count++
    }, c.prototype = {
        setMode: function (e) {
            (e === c.MUTIIPLE_MODE || e === c.SINGLE_MODE) && (this.mode = e)
        }, initDrag: function () {
            var t = this;
            e.async("disk-system:widget/plugin/uploader/uploadUtil/h5Uploader/dragger.js", function (e) {
                var i = o("#layoutApp"), n = new e(i);
                n.onDragFile = function (e) {
                    t.multiFilesAdded(e), s.log.send({name: "uploadFormDrag", sendServerLog: !1, value: "file"})
                }, n.onDragDirectory = function (e) {
                    t.multiFilesAdded(e), s.log.send({name: "uploadFormDrag", sendServerLog: !1, value: "folder"})
                }, n.notSupportDirectory = function () {
                    var e = {msg: "暂不支持文件夹的拖拽上传", mode: "caution", autoClose: !0, hasClose: !0};
                    s.ui.tip(e)
                }
            })
        }, addButton: function (e) {
            var t = this;
            this.h5Forms = new l(e, this.mode), this.h5Forms.onAddFiles = function (e, i) {
                t.multiFilesAdded(e, i)
            }, this.h5Forms.onAddDirectory = function (e) {
                t.multiFilesAdded(e)
            }
        }, initH5Form: function () {
            var e = this;
            this.h5Forms = new l(this.button, this.mode), this.h5Forms.onAddFiles = function (t, i) {
                e.multiFilesAdded(t, i)
            }, this.h5Forms.onAddDirectory = function (t) {
                e.multiFilesAdded(t)
            }
        }, setFileTypes: function (e) {
            this.h5Forms.setFileTypes(e)
        }, setUrlParams: function (e) {
            if ("string" == typeof e && -1 !== e.indexOf("=")) {
                var t = e.substring(0, e.indexOf("="));
                if (-1 !== this.createParams.indexOf(t)) {
                    var i = new RegExp(t + "\\=[^&=]*", "ig");
                    this.createParams = this.createParams.replace(i, e)
                } else this.createParams.length ? this.createParams += "&" + e : this.createParams = e
            }
        }, getUploadInfo: function (e, t) {
            var i, a = '["5910a591dd8fc18c32a8f3df4fdc1761","a5fc157d78e6ad1c7e114b056c92821e"]';
            if (e.size > 262144 && (i = d.getUploadInfo(e)), i && i.uploadId && (e.uploadId = i.uploadId, e.uploadSign = i.uploadSign, e.chunkMD5s = i.chunkMD5s, a = e.chunkMD5s, i.haveSame)) return void this.eventUploadError(e, "-1009");
            var l = this, u = function (n, a, d) {
                var u = {};
                if (n && 0 === n.errno) e.uploadId = e.uploadId ? e.uploadId : n.uploadid, e.uploadSign = e.uploadSign ? e.uploadSign : n.uploadsign, e.listUploadNum = i && i.uploadId ? "|" + n.block_list.join("||") + "|" : "all", void 0 !== e.uploadId ? t(e) : (n.errno = 1, l.eventUploadError(e, 1, "netdisk", 200), u.success = 0, u.reason = "precreate"); else {
                    var p = +n.errno, c = s.accountBan(p);
                    c.isBan && (n.errno = c.errno), l.eventUploadError(e, n.errno, "netdisk", d.status), u.success = 0, u.reason = "precreate"
                }
                "number" == typeof u.success && (u = o.extend(u, {
                    from: "H5Uploader",
                    ajaxurl: a,
                    ajaxstatus: d.status,
                    ajaxerrno: n.errno,
                    ajaxdata: o.stringify(n),
                    file: o.stringify(o.extend({}, e))
                }), r.sendLog(u))
            }, p = {path: e.path, file: e, uploadid: e.uploadId, uploadsign: e.uploadSign, blockList: a, callback: u};
            e.size <= c.FILE_CHUNK_SIZE && (p.blockList = '["5910a591dd8fc18c32a8f3df4fdc1761"]'), n.precreate(p)
        }, handleFileMD5: function (e) {
            var t = ((new Date).getTime(), this);
            e.size > 262144 ? (setTimeout(function () {
                e.cMD5 && e.sMD5 || !e.onceError || (t.eventUploadError(e, "010"), r.sendLog({
                    from: "H5Uploader",
                    success: 0,
                    reason: "calculateMD5Timeout",
                    file: o.stringify(o.extend({}, e))
                }))
            }, 24e4), a.calculateMD5(e, function (i) {
                e.cMD5 = i, e.pause || e.status === c.FILE_STATUS_CANCEL || t.rapidUpload(e)
            }), a.calculateMD5ForEveryChunk(e, function () {
                d.setUploadInfo(e, e.status === c.FILE_STATUS_UPLOADING)
            })) : e.rapidEnd = !0
        }, handleFileData: function (e) {
            var t = this, i = !1;
            a.calculateMD5ForFirstSize(e, function (n) {
                i || (n && (i = !0), e.sMD5 = n, t.getUploadInfo(e, function (e) {
                    t.sendFileInChunkStyle(e), t.handleFileMD5(e)
                }))
            })
        }, rapidUpload: function (e) {
            var t = this;
            if (this.fileQueue.length && e.status !== c.FILE_STATUS_ERROR && e.status !== c.FILE_STATUS_COMPLETE && e.cMD5 && e.sMD5) {
                if (e.creating) return void(e.afterCreateError = function (e) {
                    return function () {
                        e.creating = !1, t.rapidUpload(e)
                    }
                }(e));
                e.rapidUploading = !0;
                var i = function (i, n, a) {
                    e.rapidUploading = !1;
                    var l = !1;
                    if (!i || 0 !== i.errno && "0" !== i.errno) if (!i || -10 !== i.errno && "-10" !== i.errno) {
                        var u = +i.errno, p = s.accountBan(u);
                        p.isBan && (i.errno = p.errno), e.afterRapidError && e.afterRapidError(), e.onceError && ("undefined" != typeof e.errorStatus ? t.eventUploadError(e, e.errorCode, "pcs", e.errorStatus) : t.eventUploadError(e, i.errno, "netdisk", 200), l = !0)
                    } else e.retry = !1, t.eventUploadError(e, i.errno, "netdisk", 200), l = !0; else e.fs_id = i.info.fs_id, e.h5Kernal && e.h5Kernal.abort(), d.deleteUploadInfo(e), t.eventUploadSucceed(e, {msg: "秒传"}), l = !0;
                    e.rapidEnd = !0, l && r.sendLog({
                        from: "H5Uploader",
                        success: !i || 0 !== i.errno && "0" !== i.errno ? 0 : 1,
                        reason: i ? i.errno : 0,
                        ajaxurl: n,
                        ajaxstatus: a.status,
                        ajaxerrno: i.errno,
                        ajaxdata: o.stringify(i),
                        file: o.stringify(o.extend({}, e))
                    })
                }, a = {path: e.path, size: e.size, contentMD5: e.cMD5, sliceMD5: e.sMD5, callback: i};
                e.lastModified && (a.local_mtime = e.lastModified), n.rapidUpload(a, this.createParams)
            }
        }, sendFileInChunkStyle: function (e) {
            e.blockList = [], e.speed = [];
            var t = this, i = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
                a = u && parseInt(u.getItem("upload_chunk_size"), 10), s = a || c.FILE_CHUNK_SIZE,
                l = Math.ceil(e.size / s), d = -1, p = [], f = 0, h = 0, I = "", E = "";
            e.startProcess = function () {
                e.progressInterval = setInterval(function () {
                    t.eventUploadProcess(e, f, e.size, .5)
                }, 500)
            }, e.startProcess();
            var g = function (i, n) {
                f -= p[i] || 0, p[i] = n, f += n, f >= e.size && (t.eventUploadProcess(e, e.size, e.size, .5), clearInterval(e.progressInterval))
            }, F = function (t) {
                if ("number" != typeof t) {
                    if (++d >= l) return null;
                    t = d
                }
                var n = t * s, o = n + s >= e.size ? e.size : n + s;
                return n >= o ? null : i.call(e, n, o)
            }, U = function () {
                if (I.length > 0) {
                    var e = parseInt(I.match(/\d+/)[0], 10), i = new RegExp("\\|" + e + "\\|", "g");
                    return I = I.replace(i, ""), E.match(i).length > t.chunkRetryLimit ? !1 : e
                }
                return null
            }, v = function (i, o, a, r) {
                var s = o;
                if (e.status === c.FILE_STATUS_COMPLETE || e.status === c.FILE_STATUS_ERROR && e.retry === !1 || e.status === c.FILE_STATUS_CANCEL || e.pause === !0) return void clearInterval(e.progressInterval);
                var l = t.compileUrl(n.conf.serverUrl, e, s), d = function (t) {
                    g(s, i.size, i.size), e.blockList[s] = t.md5, r(a, s)
                }, u = function (e, t) {
                    r(a, s, !0, !1, e, t)
                };
                if ("all" !== e.listUploadNum && -1 === e.listUploadNum.indexOf("|" + s + "|")) return "undefined" == typeof e.lastComplete ? e.lastComplete = i.size : e.lastComplete += i.size, void d({md5: e.chunkMD5s[s]});
                t.callXHR(i, {
                    onsuccess: d, onerror: function (e, t, n) {
                        g(s, 0, i.size), u(e, n.status)
                    }, onprogress: function (e) {
                        g(s, e.loaded, e.total)
                    }
                }, l, a)
            }, S = function () {
                for (var i = function (n, a, s, u, p, f) {
                    if (!u && (s ? (I += "|" + a + "|", E += "|" + a + "|") : h++, h >= l)) return e.status !== c.FILE_STATUS_COMPLETE && (t.onFileLocked(e), t.createFile(e, e.blockList)), t.eventUploadProcess(e, e.size, e.size), void clearInterval(e.progressInterval);
                    if (e.status !== c.FILE_STATUS_COMPLETE) {
                        if (e.pause) return n = null, void(e.pauseGoOn = null);
                        var g = F();
                        if (g) v(g, d, n, i); else {
                            var S = U();
                            "number" == typeof S ? v(F(S), S, n, i) : S === !1 ? (e.rapidEnd ? (e.pause = !0, t.eventUploadError(e, p, "pcs", f), r.sendLog({
                                from: "H5Uploader",
                                success: 0,
                                reason: "chunkFail",
                                file: o.stringify(o.extend({}, e))
                            })) : (e.onceError = !0, e.errorCode = p, e.errorStatus = f), n = null) : n = null
                        }
                    }
                }, n = 0; n < t.chunkThread && l > n; n++) setTimeout(function () {
                    i(new XMLHttpRequest, -1, !1, !0)
                }, 1e3 * n)
            };
            e.goOn = function () {
                e.status === c.FILE_STATUS_UPLOADING && t.onFileContinue(e), e.pause = !1, e.startProcess(), t.rapidUpload(e), S()
            }, S()
        }, sendFileData: function (e) {
            var t = this;
            this.callXHR(e, {
                onsuccess: function (i) {
                    t.createFile(e, [i.md5])
                }, onerror: function (i, n, o) {
                    t.eventUploadError(e, i, "pcs", o.status)
                }, onprogress: function (i) {
                    t.eventUploadProcess(e, i.loaded, i.total)
                }
            }, this.compileUrl(n.conf.serverUrl, e))
        }, callXHR: function (e, t, i, n) {
            n || (n = new XMLHttpRequest, e.h5Kernal = n);
            var a = e;
            return "undefined" != typeof FormData && (a = new FormData, a.append("file", e)), n.upload.onabort = function () {
            }, n.onreadystatechange = function () {
                if (4 == n.readyState) {
                    var e = n.responseText;
                    if ("string" == typeof e) try {
                        e = o.parseJSON(e)
                    } catch (i) {
                    }
                    200 === n.status ? t.onsuccess(e, n) : e ? t.onerror(e.error_code, e, n) : t.onerror(void 0, e, n)
                }
            }, n.upload.onprogress = function (e) {
                t.onprogress(e)
            }, n.open("POST", i, !0), n.timeout = 72e4, n.ontimeout = function () {
                t.onerror("030", void 0)
            }, n.withCredentials = !0, n.send(a), n
        }, compileUrl: function (e, t, i) {
            return e + "&path=" + encodeURIComponent(t.path) + "&uploadid=" + (t.uploadId || 0) + "&uploadsign=" + (t.uploadSign || 0) + "&partseq=" + (i || 0)
        }, createFile: function (e, t) {
            if (this.fileQueue.length && e.status !== c.FILE_STATUS_COMPLETE) {
                var i = this;
                if (!e.creating) {
                    if (e.rapidUploading) return void(e.afterRapidError = function () {
                        e.rapidUploading = !1, i.createFile(e, t)
                    });
                    e.creating = !0;
                    var a = function (t, n, a) {
                        if (e.creating = !1, d.deleteUploadInfo(e), !t || 0 !== t.errno && "0" !== t.errno) {
                            var l = +t.errno, u = s.accountBan(l);
                            u.isBan && (t.errno = u.errno), e.afterCreateError && e.afterCreateError(), i.eventUploadError(e, t.errno, "netdisk", 200)
                        } else e.fs_id = t.fs_id, e.md5 = t.md5, i.eventUploadSucceed(e, t);
                        r.sendLog({
                            from: "H5Uploader",
                            success: !t || 0 !== t.errno && "0" !== t.errno ? 0 : 1,
                            reason: t ? t.errno : 0,
                            ajaxurl: n,
                            ajaxstatus: a.status,
                            ajaxerrno: t.errno,
                            ajaxdata: o.stringify(t),
                            file: o.stringify(o.extend({}, e))
                        })
                    };
                    "object" == typeof t && t.length && (t = o.stringify(t));
                    var l = {
                        path: e.path,
                        size: e.size,
                        uploadid: e.uploadId,
                        uploadsign: e.uploadSign,
                        blockList: t,
                        callback: a
                    };
                    e.lastModified && (l.local_mtime = e.lastModified), n.create(l, this.createParams)
                }
            }
        }, multiFilesAdded: function (e, t) {
            var i = this;
            e && "undefined" == typeof e.length && (e = [e]);
            var n = this.fileQueue.length, o = e.length + n;
            if (o > c.QUEUE_LIMIT + 20) {
                var a = r.getAppDownloadUrl(),
                    l = ['<div style="font-size:14px;margin-bottom:20px;font-weight:700;">', "文件过多，单次最多可上传" + c.QUEUE_LIMIT + "个文件", "</div>"].join(""),
                    d = "", u = '<a href="' + a + '" style="color:blue;" node-type="app-download-btn">网盘客户端</a>',
                    f = "确 定", h = "blue", I = null, E = null;
                return o < c.PC_QUEUE_LIMIT ? (d = "使用" + u + "单次最多可上传500个文件", I = [30, 30]) : p.ISSVIP ? (d = "超级会员使用" + u + "上传文件无数量限制", I = [30, 30]) : p.ISVIP ? (d = "升级超级会员，使用" + u + "上传文件无数量限制", f = "升级超级会员", h = "red", E = function () {
                    window.open("https://pan.baidu.com/buy/center?tag=8&from=upload")
                }) : (d = "开通超级会员，使用" + u + "上传文件无数量限制", f = "开通超级会员", h = "red", E = function () {
                    window.open("https://pan.baidu.com/buy/center?tag=8&from=upload")
                }), this.alertDialog = s.ui.alert({
                    title: "提示",
                    body: l + d,
                    sureText: f,
                    buttonColor: h,
                    buttonPadding: I,
                    onSure: E
                }), void r.getAppVersionAsync(function (e) {
                    if (e) {
                        var t = i.alertDialog.$dialog.find('[node-type="app-download-btn"]');
                        t.attr("href", e.url)
                    }
                })
            }
            for (var g = null, F = 0, U = e.length; U > F; F++) g = e[F], F + n > c.QUEUE_LIMIT ? this.eventAddFileFailed(g, "-130") : s.data.quota.hasEnoughSpacing() ? ("." !== g.name || 0 !== g.size) && (g.size >= c.FILE_SIZE_LIMIT && g.size <= c.FILE_SIZE_MAX ? 1 === +p.ISSVIP ? this.eventAddFileFailed(g, "-111") : 1 === +p.ISVIP && g.size <= c.FILE_SIZE_MID ? this.eventAddFileFailed(g, "-112") : 1 === +p.ISVIP && g.size > c.FILE_SIZE_MID ? this.eventAddFileFailed(g, "-113") : 1 !== +p.ISVIP && this.eventAddFileFailed(g, "-114") : g.size > c.FILE_SIZE_MAX ? this.eventAddFileFailed(g, "-110") : "" === g.name || "." === g.name || /[\\\/\:\*\?\"\<\>\|]/.test(g.name) ? this.eventAddFileFailed(g, "-90") : 0 === g.size ? this.eventAddFileFailed(g, "-100") : this.eventAddNewFile(g, t)) : this.eventAddFileFailed(g, "-10")
        }, eventAddNewFile: function (e, t) {
            e.status !== c.FILE_STATUS_ERROR && (e.status = c.FILE_STATUS_PENDING), e.index = this.fileQueue.length, e.server_path = this.onGetServerPath();
            var i = e.webkitRelativePath ? e.webkitRelativePath : e.name, n = e.directoryPath ? e.directoryPath : i;
            e.path = e.server_path.lastIndexOf("/") === e.server_path.length - 1 ? e.server_path + n : e.server_path + "/" + n, this.fileQueue.push(e), this.onFileAccepted(e, null, null, t)
        }, eventAddFileFailed: function (e, t) {
            e.status = c.FILE_STATUS_ERROR, e.retry = !1, this.eventAddNewFile(e);
            var i = c.statusMsg[t] || t, t = t;
            this.onFileError(e, i, t), r.sendLog({
                from: "H5Uploader",
                success: 0,
                reason: "AddFileFailed",
                errorMsgOrCode: i,
                file: o.stringify(o.extend({}, e))
            }), ["-111", "-112", "-113", "-114"].indexOf(t) >= 0 ? s.log.send({
                type: "upload_size_overlimit" + t,
                value: "上传遇到4G限制的用户数"
            }) : "-10" === t && s.log.send({type: "upload_quota_overlimit", value: "上传遇到容量超限的用户数"})
        }, eventUploadProcess: function (e, t, i, n) {
            if (e.status === c.FILE_STATUS_UPLOADING) {
                var o;
                o = t >= i ? 100 : (t / i * 100).toFixed(2);
                var a;
                "undefined" == typeof e.lastComplete && (e.lastComplete = 0), a = (t - e.lastComplete) / (n || 1), a = 0 > a ? 0 : a, e.speed.length >= 10 && e.speed.shift(), e.speed.push(a);
                for (var r = 0, s = e.speed.length, l = 0; s > r; r++) l += e.speed[r];
                a = l / e.speed.length, e.lastComplete = t, this.onFileProgress(e, o, a)
            }
        }, eventUploadSucceed: function (e, t) {
            e.status !== c.FILE_STATUS_COMPLETE && (e.status = c.FILE_STATUS_COMPLETE, this.uploadingNum--, this.autoUpload && this.upload(), this.onFileSuccess(e, t))
        }, eventUploadError: function (e, t, i, n) {
            if (this.uploadingNum--, e.status !== c.FILE_STATUS_CANCEL && e.status !== c.FILE_STATUS_COMPLETE && (this.autoUpload && this.upload(), e.status !== c.FILE_STATUS_ERROR)) {
                e.status = c.FILE_STATUS_ERROR;
                var o = c.statusMsg[t] || t;
                this.onFileError(e, o, t, i, n)
            }
        }, checkInCompleteFile: function () {
            for (var e = 0, t = this.fileQueue.length; t > e; e++) {
                var i = this.fileQueue[e];
                if (i.status === c.FILE_STATUS_PENDING) return e
            }
            return !1
        }, upload: function (e, t) {
            if ("boolean" == typeof t && (this.autoUpload = t), this.uploadingNum >= this.uploadLimit) return void("object" == typeof e && e.status === c.FILE_STATUS_CANCEL && e.retry !== !1 && (e.status = c.FILE_STATUS_PENDING, this.onFileInQueue(e)));
            var i, n = !1, o = !1;
            if ("number" == typeof e ? (i = this.fileQueue[e], this.uploadIndex = e) : "undefined" == typeof e ? (n = !0, i = this.fileQueue[this.uploadIndex]) : "object" == typeof e && (o = !0, i = e), i) {
                if (i.pause && i.goOn) return this.uploadingNum++, i.status = c.FILE_STATUS_UPLOADING, void i.goOn();
                o || i.status === c.FILE_STATUS_PENDING || i.status === c.FILE_STATUS_ERROR && i.retry !== !1 ? (i.pause = !1, this.uploadingNum++, i.status = c.FILE_STATUS_UPLOADING, this.handleFileData(i), this.onFileUploadStart(i), n && this.uploadIndex++) : n && (this.uploadIndex++, this.upload())
            } else {
                var a = this.checkInCompleteFile();
                a !== !1 && (this.uploadIndex = a, this.upload())
            }
        }, remove: function (e, t, i) {
            var n;
            if (n = "number" == typeof e ? this.fileQueue[e] : e) {
                var o = !1;
                n.status === c.FILE_STATUS_UPLOADING && (this.uploadingNum--, o = !0), n.status = c.FILE_STATUS_CANCEL, n.lastComplete = void 0, n.retry = void 0, n.pause = void 0, clearInterval(n.progressInterval), d.deleteUploadInfo(n), n.h5Kernal && n.h5Kernal.abort(), this.autoUpload && o && i !== !0 && this.upload(), t !== !0 && this.onFileRemoved(n)
            }
        }, pause: function (e) {
            var t;
            if (t = "number" == typeof e ? this.fileQueue[e] : e) {
                if (t.rapidUploading || t.creating) return void alert("正在创建文件，不能暂停");
                t.pause = !0, t.status === c.FILE_STATUS_UPLOADING ? (this.uploadingNum--, t.status = c.FILE_STATUS_PAUSE, this.onFilePause(t), this.autoUpload && this.upload()) : (t.status = c.FILE_STATUS_PAUSE, this.onFilePause(t))
            }
        }, goOn: function (e) {
            "function" == typeof e.pauseGoOn ? e.pauseGoOn() : (clearInterval(e.progressInterval), this.upload(e))
        }, clearQueue: function () {
            for (var e = this.uploadIndex; e >= 0; e--) this.fileQueue[e] && this.fileQueue[e].status === c.FILE_STATUS_UPLOADING && this.remove(this.fileQueue[e], !0, !0);
            this.uploadIndex = 0, this.fileQueue.length = 0, this.uploadingNum = 0, this.onQueueClear()
        }, onFileAccepted: function () {
        }, onFileRemoved: function () {
        }, onFileError: function () {
        }, onFileSuccess: function () {
        }, onFileProgress: function () {
        }, onQueueClear: function () {
        }, onFileUploadStart: function () {
        }, onFilePause: function () {
        }, onFileContinue: function () {
        }, onFileLocked: function () {
        }, onGetServerPath: function () {
            return "/"
        }
    }, i.exports = c
});
;define("disk-system:widget/plugin/uploader/log.js", function () {
    return {
        event: {},
        ajax: {},
        mix: {
            uploadType: {logType: "count", discription: "上传类型统计"},
            uploadFileSize: {discription: "上传文件大小统计"},
            uploadFileType: {discription: "上传文件类型统计"},
            uploadFileResult: {discription: "上传结果统计"},
            uploadForRapid: {discription: "秒传次数"},
            uploadFormDrag: {discription: "拖拽上传使用量"},
            "uploadSpeed-h5": {logType: "time", discription: "H5上传速度抽样统计"},
            "uploadSpeed-flash": {logType: "time", discription: "flash上传速度抽样统计"},
            "uploadSpeed-native": {logType: "time", discription: "native上传速度抽样统计"},
            uploadReduceRefresh: {discription: "减少列表刷新次数"},
            upload_file_btn_click_h5: {logType: "count", discription: "h5上传文件按钮点击"},
            upload_dir_btn_click_h5: {logType: "count", discription: "h5上传文件夹按钮点击"},
            upload_file_btn_click_flash: {logType: "count", discription: "flash上传文件按钮点击"},
            upload_dialog_show: {logType: "count", discription: "上传弹出被打开次数"},
            upload_dialog_server_path_click: {logType: "count", discription: "点击上传弹出的所在目录按钮"},
            upload_dialog_caution_title_click: {logType: "count", discription: "警告点击数"},
            upload_dialog_tip_close_click: {logType: "count", discription: "提示条关闭点击数"},
            upload_dialog_close_click: {logType: "count", discription: "上传弹框关闭点击数"},
            upload_dialog_min_click: {logType: "count", discription: "上传弹框最小化点击数"},
            upload_dialog_max_click: {logType: "count", discription: "上传弹框最大化点击数"},
            upload_success_file_path_click: {logType: "count", discription: "上传成功后文件目录点击数"},
            upload_uploading_file_path_click: {logType: "count", discription: "上传中文件目录点击数"},
            upload_size_overlimit: {logType: "count", discription: "上传遇到4G超限的用户数"},
            upload_quota_overlimit: {logType: "count", discription: "上传遇到容量超限的用户数"},
            upload_dialog_resolve_click: {logType: "count", discription: "上传失败后解决按钮点击数"},
            upload_guide_dialog: {logType: "count", discription: "上传失败后解决按钮点击数"},
            upload_dialog_resolve_click: {logType: "count", discription: "上传失败后解决按钮点击数"},
            upload_guide_dialog_linkvip_click: {logType: "count", discription: "上传失败开通超级会员点击数"},
            upload_guide_dialog_appdownload_click: {logType: "count", discription: "上传失败下载客户端点击数"}
        }
    }
});
;define("disk-system:widget/plugin/uploader/dialog/dialog.js", function (e, i, n) {
    var t, o, l = e("base:widget/libs/jquerypacket.js"), s = e("base:widget/libs/underscore.js"),
        a = e("disk-system:widget/plugin/uploader/context.js"),
        d = e("disk-system:widget/plugin/uploader/context.js").getContext(), r = e("base:widget/tools/tools.js"),
        d = e("disk-system:widget/plugin/uploader/context.js").getContext(), c = d.data.user,
        u = d.tools.shareDirManager, f = {
            panel: ['<div class="uploader-list-wrapper">', '<div class="uploader-list-header">', '<div class="file-name">文件(夹)名</div>', '<div class="file-size">大小</div>', '<div class="file-path">上传目录</div>', '<div class="file-status">状态</div>', '<div class="file-operate">操作</div>', "</div>", '<div class="tips">', '<div class="resident-caution">', '<span class="caution-title">警告</span>', '<span class="caution-text"></span>', '<em class="arrow-outer"></em>', '<em class="arrow-inner"></em>', "</div>", '<a class="g-button" href="javascript:void(0);"><span class="g-button-right">立即下载</span></a>', '<div class="text"></div>', '<em class="close">×</em>', "</div>", '<div class="uploader-list">', '<ul class="container" id="uploaderList"></ul>', "</div>", "</div>"],
            list: ['<li class="file-list status-waiting">', '<div class="process"></div>', '<div class="info">', '<div class="file-name" title="<%= filename %>">', '<div class="file-icon <%- fileicon %>"></div>', "<% if(isDir){ %>", '<span class="folder-count">(0个文件)</span>', "<% } %>", '<span class="name-text"><%- filename %></span>', "</div>", '<div class="file-size"><%- filesize %></div>', '<div class="file-path">', '<a title="<%= dir %>" class="server_path" href="#<%= mode %>/path=<%= server_path %>"><%- dir %></a>', "</div>", '<div class="file-status">', '<span class="waiting">排队中…</span>', '<span class="prepare">准备上传…</span>', '<span class="uploading">', '<em class="precent">0%</em>', '<em class="speed">(0b/s)</em>', "</span>", '<span class="error"><em></em><i>服务器错误</i><b></b></span>', '<span class="caution"><em></em><i>服务器错误</i><b></b></span>', '<span class="pause"><em></em><i>已暂停</i></span>', '<span class="cancel"><em></em><i>已取消</i></span>', '<span class="success"><em></em><i></i></span>', "</div>", '<div class="file-operate">', '<em class="operate-pause"></em>', '<em class="operate-continue"></em>', '<em class="operate-retry"></em>', '<em class="operate-remove"></em>', '<a class="error-link" href="javascript:void(0);">点我解决</a>', "</div>", "</div>", "</li>"]
        };
    t = {
        node: {$listDialog: null, $tips: null, $listContainer: null, $dialogMinHeader: null, $headerProgress: null},
        tmpl: {mainPanel: f.panel.join(""), list: s.template(f.list.join(""))},
        conf: {
            uploaderIndex: "",
            dialogStatusForAdd: null,
            dialogStatus: "back",
            uploaderMode: null,
            list: [],
            slientFile: !1,
            completeNum: 0,
            cancelNum: 0,
            pauseNum: 0,
            errorFiles: [],
            dialog: null,
            uploadingIndex: [],
            residentCaution: "严禁利用百度网盘上传、传播暴力恐怖、色情违法及其他违法信息，一经发现将严格按照相关法律法规处理。",
            speedForLog: [],
            throttle: null
        },
        bindUI: function () {
            var e = d.message;
            t.node.$listContainer.delegate(".operate-pause", "click", function () {
                var i = l(this).parents(".file-list").index(), n = t.node.$listContainer.find(".file-list").eq(i);
                if (!n.hasClass("status-locked")) {
                    var s = t.conf.list[i];
                    e.trigger("operate-file-pause" + t.conf.uploaderIndex, {file: s.source}), o.tip(!1)
                }
            }).delegate(".operate-continue", "click", function () {
                var i = l(this).parents(".file-list").index(), n = t.node.$listContainer.find(".file-list").eq(i);
                if (!n.hasClass("status-locked")) {
                    var s = t.conf.list[i];
                    e.trigger("operate-file-continue" + t.conf.uploaderIndex, {file: s.source}), o.tip(!1)
                }
            }).delegate(".operate-retry", "click", function () {
                var i = l(this).parents(".file-list").index(), n = t.node.$listContainer.find(".file-list").eq(i);
                if (!n.hasClass("status-locked")) {
                    var s = t.conf.list[i];
                    t.util.removeErrorFileFormPoll(s.source), e.trigger("operate-file-retry" + t.conf.uploaderIndex, {file: s.source}), o.tip(!1)
                }
            }).delegate(".operate-remove", "click", function () {
                var i = l(this).parents(".file-list").index(), n = t.node.$listContainer.find(".file-list").eq(i);
                if (!n.hasClass("status-locked")) {
                    var s = t.conf.list[i];
                    e.trigger("operate-file-remove" + t.conf.uploaderIndex, {file: s.source}), o.tip(!1)
                }
            }).delegate(".error-link", "click", function () {
                a.getAppVersionAsync(function (e) {
                    if (t.conf.vipTipDialog && e) {
                        var i = t.conf.vipTipDialog.$dialog.find('[node-type="app-download-btn"]');
                        i.attr("href", e.url)
                    }
                });
                var e = l(this).parents(".file-list").index(),
                    i = t.node.$listContainer.find(".file-list").eq(e).attr("node-index");
                t.util.showVipTips(i), o.tip(!1), t.conf.dialog.minimize(), d.log.send({
                    name: "upload_dialog_resolve_click",
                    value: "上传失败后解决按钮点击数"
                })
            }), t.conf.dialog.$dialog.delegate(".dialog-header", "click", function () {
                t.conf.dialog.minimize()
            }).delegate(".dialog-min-header", "click", function () {
                t.conf.dialog.restore()
            }), t.node.$tips.delegate(".close", "click", function (e) {
                e.stopPropagation(), t.node.$tips.hide(), d.log.send({
                    name: "upload_dialog_tip_close_click",
                    value: "提示条关闭点击数"
                })
            }), t.conf.dialog.onSizeChange = function (e) {
                t.conf.dialogStatus = "minimize" === e.status ? "minimize" : "back", t.util.setDialogStatus(!0)
            }, t.conf.dialog.$dialog.delegate(".server_path", "click", function () {
                d.log.send({name: "upload_dialog_server_path_click", sendServerLog: !0, value: "点击上传弹出的所在目录按钮"})
            }).delegate(".caution-title", "click", function () {
                d.log.send({name: "upload_dialog_caution_title_click", value: "警告点击数"})
            }).delegate(".dialog-min", "click", function () {
                d.log.send({name: "upload_dialog_min_click", value: "上传弹框最小化点击数"})
            }).delegate(".dialog-back", "click", function () {
                d.log.send({name: "upload_dialog_max_click", value: "上传弹框最大化点击数"})
            }).delegate(".file-path", "click", function () {
                var e = l(this);
                e.closest(".file-list").hasClass("status-success") ? d.log.send({
                    name: "upload_success_file_path_click",
                    value: "上传成功后文件目录点击数"
                }) : e.closest(".file-list").hasClass("status-uploading") && d.log.send({
                    name: "upload_uploading_file_path_click",
                    value: "上传中文件目录点击数"
                })
            })
        },
        listenCenter: function () {
            var e = d.message, i = t.conf.uploaderIndex;
            e.listen("clear-queue" + i, function () {
                o.clearQueue()
            }), e.listen("add-files" + i, function (e) {
                o.addFiles(e.files, e.silent)
            }), e.listen("requeue-file" + i, function (e) {
                o.requeueFiles(e.file)
            }), e.listen("remove-file" + i, function (e) {
                o.removeFile(e.file)
            }), e.listen("error-file" + i, function (e) {
                o.errorFile(e.file, e.errmsg, e.retry, e.errno, e.errorCodeInfo)
            }), e.listen("lock-file" + i, function (e) {
                o.lockFile(e.file, e.isLock)
            }), e.listen("success-file" + i, function (e) {
                o.successFile(e.file, e.succmsg)
            }), e.listen("start-upload-file" + i, function (e) {
                o.startUploadFile(e.file)
            }), e.listen("progress-file" + i, function (e) {
                o.progressFile(e.file, e.progress, e.speed, e.folderParam, e.originalSpeed)
            }), e.listen("pause-file" + i, function (e) {
                o.pauseFile(e.file)
            }), e.listen("continue-file" + i, function (e) {
                o.continueFile(e.file)
            }), e.listen("change-folder-status" + i, function (e) {
                o.changeFolderStatus(e.file, e.completeNum, e.allNum)
            }), e.listen("dialog-tip" + i, function (e) {
                o.tip(e)
            })
        },
        util: {
            init: function (e) {
                null === t.conf.dialog && (t.conf.uploaderIndex = e || "", t.util.bulidDialog(), t.listenCenter(), o.tip())
            }, bulidDialog: function () {
                t.conf.dialog = d.ui.window({
                    id: "web-uploader",
                    title: "文件上传",
                    theme: "blue",
                    lock: !1,
                    draggable: !1,
                    width: "633px",
                    min: !0,
                    zIndex: 42,
                    position: {
                        xy: "bottom-right",
                        offset: {bottom: 0, right: 30},
                        using: {props: {bottom: 0}, opts: {duration: 800}}
                    },
                    body: t.tmpl.mainPanel
                }), t.conf.dialog.onClose = function () {
                    if (d.log.send({
                            name: "upload_dialog_close_click",
                            value: "上传弹框关闭点击数"
                        }), t.util.setSpeedForLog(0, !0), t.conf.completeNum < t.conf.list.length || t.conf.pauseNum) return d.ui.confirm({
                        title: "放弃上传",
                        body: "列表中有未上传完成的文件，确定要放弃上传吗？",
                        onSure: function () {
                            var e = d.message;
                            e.trigger("operate-clear-queue" + t.conf.uploaderIndex), t.conf.dialog.hide(), t.util.initWindowCloseConfirm()
                        }
                    }), !1;
                    var e = d.message;
                    return e.trigger("operate-clear-queue" + t.conf.uploaderIndex), "keepCanvas"
                }, t.node.$listContainer = t.conf.dialog.find("#uploaderList"), t.node.$listDialog = t.conf.dialog.$dialog, t.node.$dialogHeader = t.conf.dialog.$header, t.node.$dialogMinHeader = t.conf.dialog.$minHeader, t.node.$dialogMinHeader.append(t.conf.dialog.$dialog.find(".tips").clone()), t.node.$tips = t.conf.dialog.$dialog.find(".tips"), t.node.$dialogMinHeader.prepend('<div class="header-progress"></div>'), t.node.$headerProgress = t.node.$dialogMinHeader.find(".header-progress"), t.bindUI()
            }, getFileIndex: function (e) {
                if ("undefined" != typeof e.index) return e.index;
                for (var i = t.conf.list, n = 0, o = i.length; o > n; n++) if (i[n] === e || i[n].source === e) return n;
                return void 0
            }, addOneFile: function (e) {
                var i = d.file.getIconAndPlugin(e.filename || e.name, e.dir, !1, !1, e.share), n = {
                    fileicon: i.smallIcon,
                    filename: i.name,
                    filesize: e.dir ? "-" : r.toFriendlyFileSize(e.size),
                    server_path: e.server_path,
                    isDir: e.dir,
                    dir: r.parseDirFromPath(e.server_path),
                    source: e
                };
                try {
                    var o = "<1k";
                    e.size > 1073741824 ? o = ">1G" : e.size > 524288e3 ? o = "<1G&>500M" : e.size > 104857600 ? o = "<500M&>100M" : e.size > 10485760 ? o = "<100M&>10M" : e.size > 1048576 ? o = "<10M&>1M" : e.size > 1024 && (o = "<1M&>1K");
                    var l = n.filename.substring(n.filename.lastIndexOf(".")).toLowerCase(), s = "其他", a = {
                        "图片": ".jpg,.jpeg,.gif,bmp,.png.jpe,.cur,.svg,.svgz,.tif,.tiff,.ico",
                        "视频": ".wmv,.rmvb,.avi,.mp4,.mkv,.flv,.swf.mpeg4,.mpeg2,.3gp,.mpga,.qt,.rm,.wmz,.wmd,.wvx,.wmx,.wm,.mpg,.mpeg,mov,.asf,.m4v",
                        "音乐": ".mp3,.wav,.aac.wma,.ra,.ram,.mp2,.ogg,.aif,.mpega,.amr,.mid,.midi,.m4a",
                        "文档": ".txt,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx",
                        "种子": ".torrent",
                        "压缩包": ".7z,.gz,.rar,.zip"
                    };
                    for (var c in a) {
                        var f = a[c];
                        if (-1 !== f.indexOf(l)) {
                            s = c;
                            break
                        }
                    }
                    d.log.send({
                        name: "uploadFileSize",
                        sendServerLog: !0,
                        value: s + " - " + o
                    }), d.log.send({name: "uploadFileType", sendServerLog: !1, value: s})
                } catch (p) {
                }
                ("" === n.dir || "/" === n.dir) && (n.dir = "我的文件");
                var g = u.getFakepathInfo(n.server_path), m = function (e) {
                    var i = t.tmpl.list(e);
                    t.node.$listContainer.append(i), t.conf.list.push(e)
                };
                g && !g.subPath ? u.getNameByFakepath(g.fakeRootPath, function (e) {
                    n.dir = e, n.server_path = window.encodeURIComponent("/" + g.fakeRootPath), n.mode = "sharedir", m(n)
                }) : g && g.subPath ? (n.mode = "sharedir", m(n)) : (n.mode = "list", m(n))
            }, windowConfirm: function () {
                return "您打开了上传窗口，继续操作会中断上传，要继续吗?"
            }, initWindowCloseConfirm: function (e) {
                l(window).unbind("beforeunload", t.util.windowConfirm), e !== !1 && t.conf.list.length > t.conf.completeNum && l(window).bind("beforeunload", t.util.windowConfirm)
            }, setDialogStatus: function (e) {
                if (t.conf.list.length) {
                    var i = "";
                    if (!t.conf.dialogStatusForAdd) {
                        if (o.tip(!1), t.conf.completeNum < t.conf.list.length && !t.conf.slientFile) i += "正在上传", i += "(" + t.conf.completeNum + "/" + t.conf.list.length + ")"; else {
                            i = "上传完成", "minimize" === t.conf.dialogStatus && t.node.$headerProgress.width("0%").hide();
                            var n = t.conf.errorFiles.length;
                            if (n) o.tip({
                                icon: "error",
                                text: "有" + n + "个文件上传失败"
                            }); else if (t.conf.slientFile) o.tip({
                                icon: "success",
                                text: "您上次有异常中断未完成上传的文件，可以继续上传哦。",
                                buttonText: "全部续传",
                                buttonAction: function () {
                                    var e = d.message;
                                    e.trigger("operate-file-start"), o.tip(!1)
                                }
                            }); else {
                                var l = t.conf.pauseNum + t.conf.cancelNum, s = t.conf.completeNum - l;
                                o.tip(s > 0 ? {icon: "success", text: "有" + s + "个文件上传成功"} : {
                                    icon: "caution",
                                    text: "有" + l + "个文件被暂停或取消"
                                })
                            }
                            t.util.setSpeedForLog(0, !0), e || t.conf.dialog.minimize().show()
                        }
                        return t.conf.dialog.title(i), t.util.initWindowCloseConfirm(), i
                    }
                }
            }, scrollTop: function () {
                var e = t.conf.uploadingIndex, i = t.node.$listContainer.find(".file-list").eq(e[0]);
                if (null !== i) {
                    var n = i.position().top, o = t.node.$listContainer.parent(), l = o.scrollTop(), s = o.height(),
                        a = n - l;
                    (a > s || 0 > a) && o.scrollTop(n)
                }
            }, removeErrorFileFormPoll: function (e) {
                for (var i = t.conf.errorFiles, n = 0, o = i.length; o > n; n++) if (i[n] === e || i[n].index === e.index) {
                    i.splice(n, 1);
                    break
                }
            }, removeIndexFormUploading: function (e) {
                for (var i = t.conf.uploadingIndex, n = 0, o = i.length; o > n; n++) if (i[n] === e) {
                    i.splice(n, 1);
                    break
                }
                i.length && t.util.scrollTop()
            }, showVipTips: function (e) {
                var i = ["您上传的文件大小超出限制，上传失败。", "您的空间不足，文件上传失败"], n = l("<div>"), o = !1;
                n.addClass("uploader-vip-intro-tips");
                var s = function (e) {
                    e = "number" == typeof e ? e : Number(e);
                    var n = "";
                    switch (e) {
                        case 1:
                            1 !== +c.is_vip ? n += '<div class="uploader-vip-size-tips yun-block"><a target="_blank" href="javascript:void(0)" class="uploader-vip-intro-btn">知道了</a></div>' : (n += '<p class="transfer-vip-context">' + i[e] + '</p><div class="yun-vip-size-intro-tips"><a target="_blank"href="/buy/center?tag=8&from=upload#question=upload" class="yun-vip-intro-btn">升级超级会员</a></div>', o = !0);
                            break;
                        case-111:
                            n += '<div class="yun-svip-size-tips yun-block"><span class="inner-tips">为保障上传成功率，4G以上大文件请使用客户端上传</span><a href="' + a.getAppDownloadUrl() + '" class="yun-vip-intro-btn" node-type="app-download-btn">下载客户端</a></div>';
                            break;
                        case-112:
                            n += '<div class="yun-vip-size-4-tips yun-block"><span class="inner-tips">为保障上传成功率，4G以上大文件请使用客户端上传</span><a href="' + a.getAppDownloadUrl() + '" class="yun-vip-intro-btn" node-type="app-download-btn">下载客户端</a></div>';
                            break;
                        case-113:
                            n += '<div class="yun-vip-size-10-tips yun-block"><span class="inner-tips">为保障上传成功率，4G以上大文件请使用<a href="' + a.getAppDownloadUrl() + '" class="download-link" node-type="app-download-btn">客户端</a>上传</span><a target="_blank" href="/buy/center?tag=8&from=upload#question=upload" class="yun-vip-intro-btn">升级超级会员</a></div>', o = !0;
                            break;
                        case-114:
                            n += '<div class="yun-vip-size-10-tips yun-block"><span class="inner-tips">为保障上传成功率，4G以上大文件请使用<a href="' + a.getAppDownloadUrl() + '" class="download-link" node-type="app-download-btn">客户端</a>上传</span><a target="_blank" href="/buy/center?tag=8&from=upload#question=upload" class="yun-vip-intro-btn">开通超级会员</a></div>', o = !0
                    }
                    return n
                };
                n.html(s(e));
                var r = {id: "uploader-vip-intro", title: "上传失败", body: n, width: 560, height: 390};
                t.conf.vipTipDialog = d.ui.window(r), t.conf.vipTipDialog.show(), n.find("a").click(function () {
                    t.conf.vipTipDialog.hide(), t.conf.vipTipDialog = null, d.log.send(o ? {
                        sendServerLog: !0,
                        name: "upload_guide_dialog_linkvip_click",
                        value: "上传失败会员引导弹框开通超级会员点击数"
                    } : {sendServerLog: !0, name: "upload_guide_dialog_appdownload_click", value: "上传失败会员引导弹框下载客户端点击数"})
                }), ["-111", "-112", "-113", "-114"].indexOf(e) >= 0 ? d.log.send({
                    type: "upload_guide_dialog" + e,
                    value: "上传显示会员引导的弹窗的用户数（文件超过4G限制）"
                }) : "1" === e && d.log.send({type: "upload_guide_dialog_1", value: "上传显示会员引导的弹窗的用户数（容量不足）"})
            }, setSpeedForLog: function (e, i) {
                if (i) {
                    var n = 0, o = t.conf.speedForLog.length;
                    if (0 === o) return;
                    for (var l = 0, s = o; s > l; l++) {
                        var a = t.conf.speedForLog[l];
                        0 !== a ? n += a : o--
                    }
                    var r = (n / o).toFixed(3, 10);
                    t.conf.speedForLog.length = 0;
                    try {
                        d.log.send({name: "uploadSpeed-" + t.conf.uploaderMode, sendServerLog: !1, value: r})
                    } catch (c) {
                    }
                } else t.conf.list.length - t.conf.completeNum === 1 && t.conf.speedForLog.length < 10 && Math.random() < .11 && t.conf.speedForLog.push(e)
            }
        }
    };
    var o = {
        clearQueue: function () {
            t.conf.list.length = 0, t.conf.completeNum = 0, t.conf.cancelNum = 0, t.conf.pauseNum = 0, t.conf.errorFiles.length = 0, t.conf.uploadingIndex.length = 0, t.node.$listContainer.html("")
        }, addFiles: function (e, i) {
            "object" == typeof e && e.length ? s.each(e, function (e) {
                t.util.addOneFile(e)
            }) : t.util.addOneFile(e), i ? t.conf.slientFile = !0 : (t.conf.dialog.restore().show(), t.conf.dialog.$dialog.is(":visible") && d.log.send({
                name: "upload_dialog_show",
                value: "打开上传弹窗",
                sendServerLog: !0
            })), clearTimeout(t.conf.dialogStatusForAdd), t.conf.dialogStatusForAdd = setTimeout(function () {
                t.conf.dialogStatusForAdd = null, t.util.setDialogStatus()
            }, 500), i && t.conf.dialog.title("上传文件")
        }, requeueFiles: function (e) {
            if (t.conf.list.length) {
                var i = t.util.getFileIndex(e), n = t.node.$listContainer.find(".file-list").eq(i);
                n.attr("class", "file-list status-waiting"), t.conf.completeNum--, t.util.setDialogStatus()
            }
        }, removeFile: function (e) {
            var i = t.util.getFileIndex(e), n = t.node.$listContainer.find(".file-list").eq(i);
            n.hasClass("status-pause") && (t.conf.completeNum--, t.conf.pauseNum--), n.attr("class", "file-list status-cancel"), t.conf.completeNum++, t.conf.cancelNum++, t.util.removeIndexFormUploading(i), t.util.setDialogStatus()
        }, errorFile: function (e, i, n, o, l) {
            if (t.conf.list.length) {
                var s = t.util.getFileIndex(e), a = t.node.$listContainer.find(".file-list").eq(s);
                if (a.attr("class", "file-list status-error"), n === !1 && a.addClass("no-retry"), a.find(".process").width("0%").hide(), t.conf.completeNum++, t.conf.errorFiles.push(e), t.util.removeIndexFormUploading(s), i) {
                    if ("超出4G限制" === i || "超出1G限制" === i) return a.attr("class", "file-list status-caution"), a.find(".file-operate a").addClass("visible"), a.eq(0).attr("node-index", o), a.find(".caution i").text(i), void t.conf.dialog.restore().show();
                    if ("空间不足" === i) return a.find(".file-operate a").addClass("visible"), a.eq(0).attr("node-index", 1), a.find(".error i").text(i), void t.conf.dialog.restore().show();
                    if ("页面过期，请刷新" === i) return void a.find(".error i").html('页面过期，请<a href="javascript:location.reload()">刷新</a>');
                    a.find(".error i").text(i);
                    try {
                        d.log.send({name: "uploadFileResult", sendServerLog: !0, value: "failure-" + i})
                    } catch (r) {
                    }
                } else {
                    a.find(".error i").text("服务器错误");
                    try {
                        d.log.send({name: "uploadFileResult", sendServerLog: !0, value: "failure"})
                    } catch (r) {
                    }
                }
                "string" == typeof l ? a.find(".error b").text("(" + l + ")").show() : a.find(".error b").hide(), t.util.setDialogStatus()
            }
        }, pauseFile: function (e) {
            if (t.conf.list.length) {
                t.conf.slientFile = !1;
                var i = t.util.getFileIndex(e), n = t.node.$listContainer.find(".file-list").eq(i);
                n.attr("class", "file-list status-pause"), t.conf.completeNum++, t.conf.pauseNum++, t.util.removeIndexFormUploading(i), t.util.setDialogStatus()
            }
        }, lockFile: function (e, i) {
            if (t.conf.list.length) {
                var n = t.util.getFileIndex(e), o = t.node.$listContainer.find(".file-list").eq(n);
                i ? o.addClass("status-locked") : o.removeClass("status-locked")
            }
        }, continueFile: function (e) {
            if (t.conf.list.length) {
                t.conf.slientFile = !1;
                var i = t.util.getFileIndex(e), n = t.node.$listContainer.find(".file-list").eq(i);
                n.attr("class", "file-list status-uploading"), t.conf.completeNum--, t.conf.pauseNum--;
                for (var o = t.conf.uploadingIndex, l = 0, s = o.length; s > l; l++) if (o[l] > i) {
                    o.splice(l, 0, i);
                    break
                }
                t.util.setDialogStatus()
            }
        }, successFile: function (e, i) {
            if (t.conf.list.length) {
                t.conf.slientFile = !1;
                var n = t.util.getFileIndex(e), l = t.node.$listContainer.find(".file-list").eq(n);
                if (i) {
                    if (l.find(".success i").text(i), -1 !== i.indexOf("秒传")) try {
                        d.log.send({name: "uploadForRapid", sendServerLog: !1, value: t.conf.uploaderMode})
                    } catch (s) {
                    }
                } else l.find(".success i").text("");
                l.hasClass("status-pause") ? (t.conf.completeNum--, t.conf.pauseNum--) : l.hasClass("status-cancel") ? (t.conf.completeNum--, t.conf.cancelNum--) : l.hasClass("status-error") && (t.conf.completeNum--, t.util.removeErrorFileFormPoll(e)), l.attr("class", "file-list status-success"), t.conf.completeNum++, t.util.removeIndexFormUploading(n), t.util.setDialogStatus(), o.systemRefresh(n), d.log.send({
                    name: "uploadFileResult",
                    sendServerLog: !0,
                    value: "success"
                })
            }
        }, systemRefresh: function (e) {
            t.conf.throttle && (clearTimeout(t.conf.throttle), setTimeout(function () {
                d.log.send({name: "uploadReduceRefresh", sendServerLog: !1, value: "success"})
            }, 10)), t.conf.throttle = setTimeout(function () {
                var i = d.message;
                i.callSystem("system-refresh", {
                    all: !0,
                    file: t.conf.list[e]
                }), i.callSystem("quota-change"), t.conf.throttle = null
            }, 1e3)
        }, startUploadFile: function (e) {
            if (t.conf.list.length) {
                t.conf.slientFile = !1;
                var i = t.util.getFileIndex(e);
                t.conf.uploadingIndex.push(i), 1 === t.conf.uploadingIndex.length && t.util.scrollTop();
                var n = t.node.$listContainer.find(".file-list").eq(i);
                (n.hasClass("status-cancel") || n.hasClass("status-error") || n.hasClass("status-pause")) && (t.conf.completeNum--, n.hasClass("status-cancel") ? t.conf.cancelNum-- : n.hasClass("status-pause") && t.conf.pauseNum--, t.util.setDialogStatus()), n.attr("class", "file-list status-uploading"), "minimize" === t.conf.dialogStatus && 1 === t.conf.uploadingIndex.length && t.node.$headerProgress.width("0%")
            }
        }, changeFolderStatus: function (e, i, n) {
            var o = e.index, l = t.node.$listContainer.find(".file-list").eq(o);
            l.find(".folder-count").text(i === n ? "(" + n + "个文件)" : "(" + i + "/" + n + "个文件)")
        }, progressFile: function (e, i, n, o, l) {
            var s = e.index, a = t.node.$listContainer.find(".file-list").eq(s);
            a.find(".process").width(i + "%").show(), a.find(".precent").text(i + "%"), a.find(".speed").text(n ? "(" + n + ")" : ""), o && t.util.changeFolderStatus(o.completeNum, o.allNum), "minimize" === t.conf.dialogStatus && 1 === t.conf.uploadingIndex.length && t.node.$headerProgress.width(i + "%").show(), t.util.setSpeedForLog(l)
        }, tip: function (e) {
            e ? (e.text && t.node.$tips.find(".text").text(e.text), e.icon && t.node.$tips.find(".icon").attr("class", "icon icon-" + e.icon), e.buttonText ? t.node.$tips.find(".g-button-right").text(e.buttonText) : t.node.$tips.find(".g-button").hide(), e.buttonLink ? t.node.$tips.find(".g-button").attr("href", e.buttonLink) : t.node.$tips.find(".g-button").attr("href", "javascript:void(0);"), e.buttonAction ? t.node.$tips.find(".g-button").bind("click", e.buttonAction) : t.node.$tips.find(".g-button").unbind("click"), e.title && t.conf.dialog.title(e.title), t.node.$tips.addClass("has-error").show()) : "hidden" === e ? t.node.$tips.hide() : t.conf.residentCaution ? (t.node.$tips.find(".resident-caution .caution-text").text(t.conf.residentCaution), t.node.$tips.find(".resident-caution").show(), t.node.$tips.removeClass("has-error").show()) : t.node.$tips.find(".resident-caution").hide()
        }, setMode: function (e) {
            if ("string" == typeof e) {
                var i = e + "-uploader", n = t.conf.uploaderMode + "-uploader";
                t.conf.dialog.$dialog.removeClass(n), t.conf.dialog.$dialog.addClass(i), t.conf.uploaderMode = e, "native" === e && t.conf.dialog.icon("icon-atv icon icon-speed")
            }
        }
    };
    n.exports = {
        get: function (e) {
            return t.util.init(e), o
        }
    }
});
;define("disk-system:widget/plugin/uploader/uploadUtil/webUploader.js", function (e, t, o) {
    var r = (e("base:widget/libs/jquerypacket.js"), e("base:widget/historyManager/historyManager.js")),
        i = e("disk-system:widget/plugin/uploader/uploadUtil/h5Uploader/h5Uploader.js"),
        s = e("disk-system:widget/plugin/uploader/uploadUtil/flashUploader/flashUploader.js"),
        n = e("disk-system:widget/plugin/uploader/uploadUtil/nativeUploader/nativeUploader.js"),
        a = e("disk-system:widget/plugin/uploader/uploadUtil/interactive.js"),
        l = e("disk-system:widget/plugin/uploader/context.js"), u = function (e, t, o, r, i, s) {
            this.button = e, this.type = t, this.messageFor = s || "", this.uploadPath = i, this.mode = o || -110, this.uploaderCore = null;
            var l = this;
            this.afterInit = [], a.init(function () {
                var e = !1, t = function () {
                    if (!e) {
                        e = !0, l.button && l.button.dom && l.button.width && l.button.height && (l.initUploaderCore(), r && l.uploaderCore.setFileTypes(r), l.setReplaceType(), l.initEvents());
                        for (var t = 0, o = l.afterInit.length; o > t; t++) "function" == typeof l.afterInit[t] && l.afterInit[t].call(l)
                    }
                };
                a.detectConnection({
                    success: function () {
                        t()
                    }, fail: function () {
                        l.type = n.check() ? l.type || "native" : l.type || "flash", t()
                    }
                })
            })
        };
    u.TYPE_FLASH = "flash", u.TYPE_NATIVE = "native", u.TYPE_H5 = "h5", u.typeOrder = [u.TYPE_NATIVE, u.TYPE_H5, u.TYPE_FLASH], u.errorMsg = {
        412: "该文件不完整，无法上传",
        "-7": "文件名不合法",
        "-10": "空间不足",
        31045: "页面过期，请刷新",
        31047: "页面过期，请刷新",
        "-6": "页面过期，请刷新",
        9100: "功能被封禁",
        9200: "功能被封禁",
        9300: "功能被封禁",
        9400: "功能被封禁",
        9500: "功能被封禁"
    }, u.prototype = {
        initUploaderCore: function () {
            for (var e = !1, t = u.typeOrder, o = 0, r = t.length; r > o; o++) {
                var i = t[o], s = !1;
                if (this.type === i && (e = !0), this.type && !e && (s = !0), i === u.TYPE_NATIVE ? this.uploaderCore = this.initNativeCore(s) : i === u.TYPE_H5 ? this.uploaderCore = this.initH5Core(s) : i === u.TYPE_FLASH && (this.uploaderCore = this.initFlashCore(s)), s && (this.uploaderCore = null), null !== this.uploaderCore && "object" == typeof this.uploaderCore) {
                    this.type = i, l.getContext().log.send({name: "uploadType", sendServerLog: !1, value: i});
                    break
                }
            }
        }, initNativeCore: function (e) {
            return n.check() ? e ? void 0 : new n(this.button, void 0, this.mode, !0) : !1
        }, initH5Core: function (e) {
            return i.check() ? e ? void 0 : new i(this.button, void 0, this.mode, !0) : !1
        }, initFlashCore: function (e) {
            if (!s.check()) return !1;
            if (!e) {
                var t = a.conf.serverUrl;
                t += "&type=tmpfile", null != localStorage && localStorage.getItem("flashUploadUrl") && (t = localStorage.getItem("flashUploadUrl"));
                var o = -110 === this.mode || -100 === this.mode ? this.mode : -110;
                return new s(this.button, t, o)
            }
        }, addButton: function (e) {
            if (!this.uploaderCore) {
                var t = function (e) {
                    return function () {
                        this.type === u.TYPE_H5 ? this.uploaderCore.addButton && this.uploaderCore.addButton(e) : e && e.dom && e.dom.css("cursor", "default").attr("title", "使用高级浏览器支持此处点击上传")
                    }
                }(e);
                return void this.afterInit.push(t)
            }
            this.type === u.TYPE_H5 ? this.uploaderCore.addButton && this.uploaderCore.addButton(e) : e && e.dom && e.dom.css("cursor", "default").attr("title", "使用高级浏览器支持此处点击上传")
        }, setFileTypes: function (e, t) {
            this.type === u.TYPE_FLASH && (e = e.replace(".", "*.")), "function" == typeof this.uploaderCore.setFileTypes && this.uploaderCore.setFileTypes(e, t)
        }, setReplaceType: function (e) {
            if (this.uploaderCore) {
                var t = "rtype=1";
                if ("replace" === e ? t = "rtype=3" : "failure" === e && (t = "rtype=0"), !this.uploaderCore) {
                    var o = function (e) {
                        return function () {
                            "function" == typeof this.uploaderCore.setUrlParams && this.uploaderCore.setUrlParams(e)
                        }
                    }(t);
                    return void this.afterInit.push(o)
                }
                "function" == typeof this.uploaderCore.setUrlParams && this.uploaderCore.setUrlParams(t)
            }
        }, parseSpeed: function (e, t) {
            return t && (e /= 8, 8 > e) ? Math.round(e) + "b/s" : 1024 > e ? Math.round(e) + "B/s" : 1048576 > e && e >= 1024 ? Math.round(e / 1024) + "KB/s" : 1073741824 > e && e >= 1048576 ? 10 * (e / 1024 / 1024).toFixed(1) / 10 + "MB/s" : 100 * (e / 1024 / 1024 / 1024).toFixed(2) / 100 + "GB/s"
        }, initEvents: function () {
            if (this.uploaderCore) {
                var e = this, t = l.getContext().message;
                this.uploaderCore.onGetServerPath = function () {
                    var t;
                    return t = e.uploadPath ? e.uploadPath : "sharedir" === r.getCurrentModule() ? r.getCurrentParams().path : location.hash.indexOf("path=") > -1 ? l.getContext().list.getHistoryPath() : "/", t.lastIndexOf("/") < t.length - 1 && (t += "/"), t
                }, this.uploaderCore.onUpdateStatus = function () {
                }, this.uploaderCore.onProgressPause = function () {
                }, this.uploaderCore.onProgressResume = function () {
                }, this.uploaderCore.onFileLocked = function (t, o) {
                    t && e.onFileLocked(t, o)
                }, this.uploaderCore.onChooseFile = function () {
                }, this.uploaderCore.onFileAccepted = function (t, o, r, i) {
                    t && e.onAddFiles(t, i)
                }, this.uploaderCore.onFileInQueue = function (t) {
                    t && e.onFileInQueue(t)
                }, this.uploaderCore.onFileRemoved = function (t) {
                    t && e.onRemoveFile(t)
                }, this.uploaderCore.onFileError = function (t, o, r, i, s) {
                    if (t) {
                        var n = "服务器错误";
                        "number" == typeof o || /^\-?\d+$/.test(o) ? (n = u.errorMsg[o], n ? t.retry = !1 : n = "服务器错误") : "string" == typeof o && (n = o), e.onFileError(t, {
                            msg: n,
                            errno: r,
                            errorServer: i,
                            httpStatus: s
                        })
                    }
                }, this.uploaderCore.onFileUploadStart = function (t) {
                    t && e.onFileUploadStart(t)
                }, this.uploaderCore.onFileSuccess = function (t, o) {
                    t && e.onFileSuccess(t, o)
                }, this.uploaderCore.onFileProgress = function (t, o, r) {
                    t && e.onProgressFile(t, o, r)
                }, this.uploaderCore.onFilePause = function (t) {
                    t && e.onFilePause(t)
                }, this.uploaderCore.onFileContinue = function (t) {
                    t && e.onFileContinue(t)
                }, this.uploaderCore.onSessionProgressComplete = function () {
                }, this.uploaderCore.onQueueClear = function () {
                }, this.uploaderCore.onFolderStatusChange = function (t, o, r) {
                    t && e.onFolderStatusChange(t, o, r)
                }, t.listen("operate-clear-queue" + this.messageFor, function () {
                    e.clearQueue()
                }), t.listen("operate-file-continue" + this.messageFor, function (t) {
                    e.continueFile(t.file)
                }), t.listen("operate-file-retry" + this.messageFor, function (t) {
                    e.retryFile(t.file)
                }), t.listen("operate-file-remove" + this.messageFor, function (t) {
                    e.removeFile(t.file)
                }), t.listen("operate-file-pause" + this.messageFor, function (t) {
                    e.pauseFile(t.file)
                }), t.listen("operate-file-start" + this.messageFor, function () {
                    e.startUpload()
                })
            }
        }, clearQueue: function () {
            this.uploaderCore.clearQueue && this.uploaderCore.clearQueue();
            var e = l.getContext().message;
            e.trigger("clear-queue" + this.messageFor)
        }, startUpload: function () {
            this.uploaderCore.upload(void 0, !0)
        }, removeFile: function (e) {
            this.uploaderCore.remove && this.uploaderCore.remove(e)
        }, pauseFile: function (e) {
            this.uploaderCore.pause && this.uploaderCore.pause(e)
        }, continueFile: function (e) {
            this.uploaderCore.goOn && this.uploaderCore.goOn(e)
        }, retryFile: function (e) {
            this.uploaderCore.upload(e)
        }, getQueue: function () {
            return this.uploaderCore.fileQueue
        }, hasUnComplete: function () {
            return this.type === u.TYPE_NATIVE ? this.uploaderCore.hasUnComplete && this.uploaderCore.hasUnComplete() : 0
        }, onAddFiles: function (e, t) {
            var o = l.getContext().message, r = !1, i = this.hasUnComplete();
            i && (r = !0), o.trigger("add-files" + this.messageFor, {
                files: [e],
                evtFiles: t,
                silent: r
            }), r || this.uploaderCore.upload(void 0, !0)
        }, onFileInQueue: function (e) {
            var t = l.getContext().message;
            t.trigger("requeue-file" + this.messageFor, {file: e})
        }, onRemoveFile: function (e) {
            var t = l.getContext().message;
            t.trigger("remove-file" + this.messageFor, {file: e})
        }, onFileLocked: function (e, t) {
            var o = l.getContext().message;
            o.trigger("lock-file" + this.messageFor, {file: e, isLock: t})
        }, onFileError: function (e, t) {
            var o = l.getContext().message, r = {file: e};
            t && t.msg && (r.errmsg = t.msg, r.errno = t.errno);
            var i = "0";
            switch (this.type) {
                case u.TYPE_FLASH:
                    i = "1";
                    break;
                case u.TYPE_NATIVE:
                    i = "2"
            }
            var s = "3", n = "local", a = "https:" === location.protocol ? 1 : 0;
            if ("string" == typeof t.errorServer) switch (t.errorServer) {
                case"pcs":
                    s = "0", n = "pcs";
                    break;
                case"netdisk":
                    s = "1", n = "netdisk"
            } else "number" == typeof t.errorServer && (s = "" + t.errorServer);
            r.httpStatus = "undefined" != typeof t.httpStatus ? t.httpStatus : "", r.errno = "undefined" != typeof t.errno ? t.errno : "", r.errorCodeInfo = r.errno + "-" + a + i + s + r.httpStatus, r.retry = e.retry, o.trigger("error-file" + this.messageFor, r), l.setLocalLog({
                from: this.type,
                type: "uploadFail" + a,
                detailKey: r.errno + "-" + n + "-" + r.httpStatus
            })
        }, onFileSuccess: function (e, t) {
            var o = l.getContext().message, r = {file: e};
            t && t.msg && (r.succmsg = t.msg), o.trigger("success-file" + this.messageFor, r), l.setLocalLog({
                from: this.type,
                type: "uploadSuccess",
                detailKey: "success"
            })
        }, onFileUploadStart: function (e) {
            var t = l.getContext().message;
            t.trigger("start-upload-file", {file: e})
        }, onFolderStatusChange: function (e, t, o) {
            var r = l.getContext().message;
            r.trigger("change-folder-status" + this.messageFor, {file: e, completeNum: t, allNum: o})
        }, onProgressFile: function (e, t, o, r) {
            var i = l.getContext().message, s = o;
            if (100 === t) o = ""; else if ("number" == typeof o) {
                var n = !1;
                this.type === u.TYPE_NATIVE && (n = !0, s = o / 8), o = this.parseSpeed(o, n)
            }
            var a = {file: e, progress: t, speed: o, originalSpeed: s / 1024, folderParam: r};
            i.trigger("progress-file" + this.messageFor, a)
        }, onFilePause: function (e) {
            var t = l.getContext().message;
            t.trigger("pause-file" + this.messageFor, {file: e})
        }, onFileContinue: function (e) {
            var t = l.getContext().message;
            t.trigger("continue-file" + this.messageFor, {file: e})
        }
    }, o.exports = u
});
;define("disk-system:widget/plugin/uploader/start.js", function (t, o, e) {
    var i = t("base:widget/storage/storage.js"),
        n = (t("base:widget/tools/tools.js"), t("base:widget/libs/jquerypacket.js")),
        l = t("disk-system:widget/plugin/uploader/context.js"), a = {
            initStart: !0,
            initError: !1,
            button: null,
            dialog: null,
            uploaderIndex: -1,
            dialogUploader: null,
            dialogs: [],
            initDialogButtons: [],
            initLeftButtons: function () {
                if (a.dialogUploader) {
                    for (var t = 0, o = a.initDialogButtons.length; o > t; t++) a.dialogUploader.addButton(a.initDialogButtons[t]);
                    a.initDialogButtons.length = 0
                }
            },
            initLeftButtonsError: function () {
                if (!a.dialogUploader && a.initError) {
                    for (var t = 0, o = a.initDialogButtons.length; o > t; t++) n(a.initDialogButtons[t].dom).bind("click", a.haveNotInit);
                    a.initDialogButtons.length = 0
                }
            },
            initUpload: function (o, e) {
                if (a.initStart = !0, o && a.dialogUploader) return void a.dialogUploader.addButton(e.button);
                a.uploaderIndex++;
                var n = "undefined" != typeof i && i.getItem("uploadType"),
                    d = t("disk-system:widget/plugin/uploader/uploadUtil/webUploader.js"),
                    s = t("disk-system:widget/plugin/uploader/dialog/dialog.js"),
                    r = "single" === e.mode ? -100 : "directory" === e.mode ? -90 : -110,
                    u = new d(e.button, n, r, e.fileTypes, e.basePath, a.uploaderIndex), g = function () {
                        return a.initStart = !1, u.uploaderCore ? void(o ? (a.dialogUploader = u, a.initLeftButtons(), a.dialog.setMode(u.type)) : a.dialogs.push(u)) : (a.initError = !0, void a.initLeftButtonsError())
                    };
                if (u.afterInit.push(g), o) a.dialog = s.get(a.uploaderIndex), a.dialog.setMode(u.type); else {
                    var p = l.getContext().message, f = a.uploaderIndex || "";
                    p.listen("add-files" + f, function (t) {
                        e.onAddFile && e.onAddFile(t)
                    }), p.listen("success-file" + f, function (t) {
                        e.onFileSuccess && e.onFileSuccess(t)
                    }), p.listen("progress-file" + f, function (t) {
                        e.onFileProgress && e.onFileProgress(t)
                    }), p.listen("error-file" + f, function (t) {
                        e.onFileError && e.onFileError(t)
                    })
                }
            },
            haveNotInit: function () {
                if (!a.dialogUploader && !a.dialogs.length) {
                    if (a.initStart) return void l.getContext().ui.tip({
                        msg: "上传组件正在初始化，请稍后...",
                        mode: "caution",
                        autoClose: !0,
                        hasClose: !0
                    });
                    var t = l.getContext().ui.alert({
                        title: "安装flash",
                        body: '<span style="font-size:14px;">要使用上传功能，您需要安装Flash插件,<a target="_blank" href="http://get.adobe.com/cn/flashplayer/">猛击这里</a>安装<br>或者您可以使用<a target="_blank" href="http://www.google.cn/intl/zh-CN/chrome/browser/desktop/index.html">Chrome浏览器</a>等高级浏览器打开百度网盘</span>',
                        sureText: " 关 闭 ",
                        onSure: function () {
                            t.hide()
                        }
                    })
                }
            }
        }, d = {
            onUploadButtonRender: function (t, o) {
                a.button = o.button, l.setContext(t), o.mode = o.mode || "directory", o.button.hasInit || window.setTimeout(function () {
                    var t = o.button.dom;
                    if (t.is(":visible") && !t.hasClass("g-disabled") && !o.button.hasInit) {
                        var e = "boolean" == typeof o.useDialog ? o.useDialog : !0;
                        a.initUpload(e, o), o.button.hasInit = !0
                    }
                }, 500)
            }, start: function (t, o) {
                if (l.setContext(t), o && o.button) {
                    if (!o.button.dom) {
                        var e = o.button;
                        o.button = {dom: n(e), width: n(e).outerWidth(), height: n(e).outerHeight()}
                    }
                    if (o.mode = o.mode || "single", o.useDialog !== !1) return void(a.dialogUploader ? (a.initDialogButtons.push(o.button), a.initLeftButtons()) : setTimeout(function () {
                        a.dialogUploader ? (a.initDialogButtons.push(o.button), a.initLeftButtons()) : d.onUploadButtonRender(t, o)
                    }, 600));
                    d.onUploadButtonRender(t, o)
                }
            }
        };
    e.exports = d
});