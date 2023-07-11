"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[59456],{692546:(e,n,i)=>{i.r(n),i.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-9e5a8700","path":"/guide/usage/debug.html","title":"Debug","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"excerpt":"","headers":[{"level":2,"title":"Enabling logging","slug":"enabling-logging","link":"#enabling-logging","children":[{"level":3,"title":"Zigbee2MQTT debug logging","slug":"zigbee2mqtt-debug-logging","link":"#zigbee2mqtt-debug-logging","children":[]},{"level":3,"title":"Zigbee-herdsman debug logging","slug":"zigbee-herdsman-debug-logging","link":"#zigbee-herdsman-debug-logging","children":[]},{"level":3,"title":"Home Assistant OS/Supervised addon","slug":"home-assistant-os-supervised-addon","link":"#home-assistant-os-supervised-addon","children":[]}]},{"level":2,"title":"Change log level during runtime","slug":"change-log-level-during-runtime","link":"#change-log-level-during-runtime","children":[]}],"git":{"updatedTime":1689095568000},"filePathRelative":"guide/usage/debug.md"}')},530149:(e,n,i)=>{i.r(n),i.d(n,{default:()=>l});var a=i(166252);const d=(0,a.uE)('<h1 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> Debug</h1><p>In case Zigbee2MQTT isn&#39;t working as expected the following tips can help you in finding the problem.</p><h2 id="enabling-logging" tabindex="-1"><a class="header-anchor" href="#enabling-logging" aria-hidden="true">#</a> Enabling logging</h2><h3 id="zigbee2mqtt-debug-logging" tabindex="-1"><a class="header-anchor" href="#zigbee2mqtt-debug-logging" aria-hidden="true">#</a> Zigbee2MQTT debug logging</h3><p>To enable debug logging for Zigbee2MQTT add the following in your <code>configuration.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">log_level</span><span class="token punctuation">:</span> debug\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zigbee-herdsman-debug-logging" tabindex="-1"><a class="header-anchor" href="#zigbee-herdsman-debug-logging" aria-hidden="true">#</a> Zigbee-herdsman debug logging</h3><p>To enable debug logging for Zigbee-herdman start Zigbee2MQTT with: <code>DEBUG=zigbee-herdsman* npm start</code>. Zigbee-herdsman is the Zigbee library where Zigbee2MQTT is based up-on.</p><p><strong>Important:</strong> this is <strong>not</strong> logged to the log files and is only available on the STDOUT/STDERR.</p><p>To enable debug logging in the Zigbee2MQTT Docker container add <code>-e DEBUG=zigbee-herdsman*</code> to your <code>docker run</code> command. The logging can be retrieved via <code>docker logs ZIGBEE2MQTT_CONTAINER_NAME &gt; log.txt 2&gt;&amp;1</code>.</p><h3 id="home-assistant-os-supervised-addon" tabindex="-1"><a class="header-anchor" href="#home-assistant-os-supervised-addon" aria-hidden="true">#</a> Home Assistant OS/Supervised addon</h3><ul><li>Go to <code>Supervisor</code> in the main menu and click on the <code>Zigbee2MQTT</code> addon.</li><li>In the top tabs, click on <code>Configuration</code></li><li>Add the following to the end of the file, with no spaces or tabs preceding it: <code>zigbee_herdsman_debug: true</code></li><li>Click <code>Save</code>, and when prompted to restart, click <code>Restart add-on</code></li></ul><p>Herdsman debug logs should now sow up on the <code>Logs</code> tab for the addon.</p><p>To grab all the logs, log in via SSH and execute:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker logs CONTAINER_ID &gt; log.txt 2&gt;&amp;1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To determine the <code>CONTAINER_ID</code> execute <code>docker ps</code>.</p><h2 id="change-log-level-during-runtime" tabindex="-1"><a class="header-anchor" href="#change-log-level-during-runtime" aria-hidden="true">#</a> Change log level during runtime</h2>',17),g={},l=(0,i(983744).Z)(g,[["render",function(e,n){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[d,(0,a._)("p",null,[(0,a.Uk)("See "),(0,a.Wm)(i,{to:"/guide/usage/mqtt_topics_and_messages.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("MQTT topics and message structure")])),_:1})])])}]])}}]);