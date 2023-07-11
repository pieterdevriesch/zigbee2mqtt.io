"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[34228],{628497:(e,t,n)=>{n.r(t),n.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-edea379a","path":"/advanced/zigbee/01_zigbee_network.html","title":"Zigbee network","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Device types","slug":"device-types","link":"#device-types","children":[{"level":3,"title":"End Device","slug":"end-device","link":"#end-device","children":[]},{"level":3,"title":"Router","slug":"router","link":"#router","children":[]},{"level":3,"title":"Coordinator","slug":"coordinator","link":"#coordinator","children":[]},{"level":3,"title":"Finding out the type of your device","slug":"finding-out-the-type-of-your-device","link":"#finding-out-the-type-of-your-device","children":[]},{"level":3,"title":"Green Power devices","slug":"green-power-devices","link":"#green-power-devices","children":[]}]},{"level":2,"title":"Zigbee networking","slug":"zigbee-networking","link":"#zigbee-networking","children":[{"level":3,"title":"Physical and MAC layers","slug":"physical-and-mac-layers","link":"#physical-and-mac-layers","children":[]},{"level":3,"title":"The Network and Transport layers","slug":"the-network-and-transport-layers","link":"#the-network-and-transport-layers","children":[]},{"level":3,"title":"The application layer","slug":"the-application-layer","link":"#the-application-layer","children":[]},{"level":3,"title":"Zigbee2MQTT","slug":"zigbee2mqtt","link":"#zigbee2mqtt","children":[]}]}],"git":{"updatedTime":1689095568000},"filePathRelative":"advanced/zigbee/01_zigbee_network.md"}')},611001:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(166252);const i=(0,r.uE)('<h1 id="zigbee-network" tabindex="-1"><a class="header-anchor" href="#zigbee-network" aria-hidden="true">#</a> Zigbee network</h1><h2 id="device-types" tabindex="-1"><a class="header-anchor" href="#device-types" aria-hidden="true">#</a> Device types</h2><p>In Zigbee, there are three different types of devices: end device, router, and coordinator. A Zigbee network always has <strong>one</strong> (and no more) coordinator, and can have multiple routers and end devices. In the case of Zigbee2MQTT, the coordinator is your CC2531 USB stick.</p><h3 id="end-device" tabindex="-1"><a class="header-anchor" href="#end-device" aria-hidden="true">#</a> End Device</h3><p>End devices do not route traffic. They may also sleep, which makes end devices a suitable choice for battery operated devices. An end device only has one parent, either the coordinator or a router, generally the closest device when it was paired. All communications to and from the end device is via their parent. If a parent router goes offline all traffic to its children will cease until those end devices time out and attempt to find a new parent. Some models of end device, notably Xiaomi, don&#39;t attempt to find a new parent so will remain isolated until re-paired with the network.</p><p><em>Examples: WXKG01LM, RTCGQ01LM, MCCGQ11LM</em></p><h3 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> Router</h3><p>Routers are responsible for routing traffic between different nodes. Routers may not sleep. As such, routers are not a suitable choice for battery operated devices. Routers are also responsible for receiving and storing messages intended for their children. In addition to this, routers are the gate keepers to the network. They are responsible for allowing new nodes to join the network.</p>',8),a={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.zigbee2mqtt.io/devices/ZBDongle-E.html",target:"_blank",rel:"noopener noreferrer"},s=(0,r._)("p",null,[(0,r._)("em",null,"Note: Some devices advertising router functionality in a Zigbee network perform poorly and can thus effectively lower the stability of your Zigbee network.")],-1),l=(0,r._)("h3",{id:"coordinator",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#coordinator","aria-hidden":"true"},"#"),(0,r.Uk)(" Coordinator")],-1),d=(0,r._)("p",null,"A coordinator is a special router. In addition to all of the router capabilities, the coordinator is responsible for forming the network. To do that, it must select the appropriate channel, PAN ID, and extended network address. It is also responsible for selecting the security mode of the network.",-1),h={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/default",target:"_blank",rel:"noopener noreferrer"},c=(0,r.uE)('<h3 id="finding-out-the-type-of-your-device" tabindex="-1"><a class="header-anchor" href="#finding-out-the-type-of-your-device" aria-hidden="true">#</a> Finding out the type of your device</h3><p>Zigbee2MQTT logs the device type of your devices on startup, e.g.:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2018-5-28 20:39:46 INFO 0x00158d00018255df (0x00158d00018255df): ZNCZ02LM - Xiaomi Mi power plug ZigBee (Router)\n2018-5-28 20:39:46 INFO 0x00158d0001b79111 (0x00158d0001b79111): WSDCGQ01LM - Xiaomi MiJia temperature &amp; humidity sensor (EndDevice)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="green-power-devices" tabindex="-1"><a class="header-anchor" href="#green-power-devices" aria-hidden="true">#</a> Green Power devices</h3><p>Zigbee Green Power devices are special end devices that are designed to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first by a Green Power &quot;proxy&quot;. This means the Green Power device must be in range of a regular Zigbee device that supports the Green Power proxy role. Examples are Philips Hue and (at least some) Ikea Tradfri bulbs.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p>',6),u=(0,r._)("em",null,"a lot",-1),p=(0,r._)("p",null,[(0,r._)("em",null,"Example Green Power devices: PTM 215Z, SR-ZGP2801K-5C, SR-ZGP2801K2-DIM, SR-ZGP2801K4-DIM")],-1),g=(0,r._)("h2",{id:"zigbee-networking",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#zigbee-networking","aria-hidden":"true"},"#"),(0,r.Uk)(" Zigbee networking")],-1),m={href:"https://en.wikipedia.org/wiki/Internet_protocol_suite#Layer_names_and_number_of_layers_in_the_literature",target:"_blank",rel:"noopener noreferrer"},f=(0,r._)("ol",null,[(0,r._)("li",null,"the physical and MAC layers,"),(0,r._)("li",null,"the network and transport layer,"),(0,r._)("li",null,"the application layer, and"),(0,r._)("li",null,"the Zigbee2MQTT layer.")],-1),b=(0,r._)("p",null,"Most of the focus will be on the last two layers.",-1),v=(0,r._)("h3",{id:"physical-and-mac-layers",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#physical-and-mac-layers","aria-hidden":"true"},"#"),(0,r.Uk)(" Physical and MAC layers")],-1),w={href:"https://en.wikipedia.org/wiki/IEEE_802.15.4",target:"_blank",rel:"noopener noreferrer"},y=(0,r.uE)('<h3 id="the-network-and-transport-layers" tabindex="-1"><a class="header-anchor" href="#the-network-and-transport-layers" aria-hidden="true">#</a> The Network and Transport layers</h3><p>The Network and Transport layers are where the routing, security and transport between the various nodes in a Zigbee network are defined. This includes things like the network encryption model. This is also where the difference between the controller, routers and end-nodes is defined in the Zigbee network - see <a href="#device-types">device types</a>. There is one other Zigbee concept that I’ll put at the transport layer; the concept of Endpoints. Similar to ports in TCP/IP, Endpoints allow each physical device to have multiple virtual devices on the network. For example, a 3-gang Zigbee switch might have a single radio, and hence only one MAC address and only one Zigbee network address, but have three endpoints - one for each switch. Each endpoint can then run a single ‘switch’ interface.</p><h3 id="the-application-layer" tabindex="-1"><a class="header-anchor" href="#the-application-layer" aria-hidden="true">#</a> The application layer</h3>',3),k={href:"https://github.com/Koenkk/zigbee-herdsman/blob/master/docs/07-5123-08-Zigbee-Cluster-Library.pdf",target:"_blank",rel:"noopener noreferrer"},T=(0,r.uE)('<p>As noted above, each cluster comes in two flavours; client and server. Generally the server is the endpoint that is running more frequently, and the client chooses to connect to the server. In many cases this isn’t clear-cut when considering the cluster functionality, so the spec decides pretty much arbitrarily.</p><p>The Zigbee controller can ‘bind’ the clusters for two endpoints together. It will connect one endpoint that implements the client variant of a cluster to another endpoint that implements the server variant of the same cluster.</p><p>There are also some special clusters. The ‘group’ cluster allows the definition of ‘groups’ - each defined by a small integer. If an endpoint implements the group cluster then it can be configured to be part of some number of groups. The device remembers which groups it is a member of. A group can then be treated like a virtual endpoint. Messages sent to a particular group ID are broadcast over the network and all devices that are part of that group will respond to the message. Similarly, a client can be bound to a group rather than another endpoint, so that, for example, a single switch can control a whole group of lights.</p><p>Similarly, the scene cluster allows a device to be configured to remember parameters from other clusters implemented on that device. A light might remember brightness. A roller blind might remember a set height. Each device can remember a small number of scenes, identified by ID.</p><p>Scenes and groups are designed to work together. One might imagine setting up a bunch of different devices, then joining them all into a group, then sending the group a ‘remember scene’ command. One could then send a ‘recall scene’ command to the group with the appropriate scene ID to cause many devices to configure themselves in a given way with minimal network traffic, and hence minimal latency.</p><h3 id="zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#zigbee2mqtt" aria-hidden="true">#</a> Zigbee2MQTT</h3><p>The Zigbee stack has a certain amount of home automation protocol already defined; as discussed, devices can be formed into groups and scenes defined, switches can be bound to those groups. In such a setup the Zigbee controller might help configure the network, but afterwards it is passive at the application level.</p><p>If more flexibility is required than comes in the pre-defined Zigbee clusters, for example “Turn on the fan when the relative humidity is over 70%.”, then you need more clever control. It is here that Zigbee2MQTT comes in. It translates between Zigbee and MQTT.</p><p>When a device is added to the network with a Zigbee-Herdsman controller, the controller uses the low-level configuration clusters to interview the device and find out what the device is, what endpoints it has, and what clusters each of those endpoints implements. The Zigbee-Herdsman-Converters then record, for each model of device, which clusters the controller should bind to, and how the conversion to MQTT should be handled. Most devices in Zigbee-Herdsman-Converters use generic converters that bind to each Zigbee cluster and provide a standard MQTT interface for that cluster.</p><p>With this setup, when a switch is activated, it sends a message to the Zigbee2MQTT controller. The controller then sends out an MQTT message. The MQTT controller (which is different to the Zigbee controller. e.g. the Home Assistant package) then decides what to do based on that message. It might, for example, decide to turn on a particular light, so it would send an MQTT message requesting the light to turn on. Zigbee2MQTT would receive that message, then send a Zigbee message to the light’s endpoint using the appropriate Zigbee cluster.</p><p>This system is significantly more flexible than the base Zigbee system. But it also has higher latency (it takes longer for the system to react to a switch being toggled) and it has more points of failure. With the base Zigbee setup, not even the controller is involved once setup is complete. With the Zigbee2MQTT setup there are two Zigbee messages, two MQTT messages, and three extra processing steps (the main controller deciding what to do, and MQTT processing the messages in each direction).</p><p>Note that in some commercial Zigbee systems, such as Phillips Hue, the controller node in the Zigbee network is also the automation controller that can add additional smarts on top of the base Zigbee setup. Zigbee2MQTT inserts MQTT between the two, allowing them to be decoupled.</p>',12),Z={},_=(0,n(983744).Z)(Z,[["render",function(e,t){const n=(0,r.up)("ExternalLinkIcon"),Z=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",null,[i,(0,r._)("p",null,[(0,r._)("em",null,[(0,r.Uk)("Examples: LED1545G12, 7146060PH, ZNCZ02LM, "),(0,r._)("a",a,[(0,r.Uk)("CC2531 USB sniffer flashed with the router firmware"),(0,r.Wm)(n)]),(0,r.Uk)(", "),(0,r._)("a",o,[(0,r.Uk)("SONOFF ZBDongle-E-based router"),(0,r.Wm)(n)])])]),s,l,d,(0,r._)("p",null,[(0,r._)("em",null,[(0,r.Uk)("Examples: "),(0,r._)("a",h,[(0,r.Uk)("CC2531 USB sniffer flashed with the coordinator firmware"),(0,r.Wm)(n)])])]),c,(0,r._)("p",null,[(0,r.Uk)("When pairing a Green Power device, you must choose whether translated messages should be re-transmitted by unicast or broadcast. Only "),(0,r.Wm)(Z,{to:"/guide/usage/pairing_devices.html"},{default:(0,r.w5)((()=>[(0,r.Uk)("enable join")])),_:1}),(0,r.Uk)(' on a specific device to use unicast for this Green Power device. Enable join on all devices to use broadcast. Do note that each proxy will generate a unique broadcast for each Green Power event, and a single keypress may generate more than one event (e.g. "key down" then "key up"). If there are multiple proxies paired with a Green Power device, this may generate '),u,(0,r.Uk)(" of traffic.")]),p,(0,r._)("p",null,[(0,r._)("em",null,[(0,r.Uk)("Note: Heavy use of broadcasts can negatively impact performance of your network (See "),(0,r.Wm)(Z,{to:"/advanced/zigbee/02_improve_network_range_and_stability.html"},{default:(0,r.w5)((()=>[(0,r.Uk)("Broadcasts")])),_:1}),(0,r.Uk)(").")])]),g,(0,r._)("p",null,[(0,r.Uk)("This section is an overview of how the Zigbee protocol stack divides into layers (See "),(0,r._)("a",m,[(0,r.Uk)("Wikipedia - IP layers"),(0,r.Wm)(n)]),(0,r.Uk)(" ). The number of layers in this type of description often varies; this discussion uses 4:")]),f,b,v,(0,r._)("p",null,[(0,r.Uk)("The Physical and MAC layers of the Zigbee protocol are defined by "),(0,r._)("a",w,[(0,r.Uk)("IEEE 802.15.4"),(0,r.Wm)(n)]),(0,r.Uk)(". This is a common set of standards that are used by multiple protocol stacks, including Zigbee, 6LoWPAN, Thread and Z-Wave. There are actually a few different frequency bands that IEEE 802.15.4 can use; the same 2.4 GHz band that WiFi can use, and then an 800 MhZ and a 900MhZ band whose use varies by country. In general, devices using one stack choose one of these and avoid the others. For example, Zigbee devices generally use the 2.4 GHz band and Z-Wave devices generally use the 8/900 MHz bands (depending on country).")]),y,(0,r._)("p",null,[(0,r.Uk)("Zigbee is more than just a networking technology; it defines a bunch of standard applications that run on the network. These applications are defined in the Zigbee Cluster Library specification (see "),(0,r._)("a",k,[(0,r.Uk)("Zigbee Cluster Library Specification v7"),(0,r.Wm)(n)]),(0,r.Uk)("). Each ‘cluster’ defines one type of application communication. Each cluster type has its own integer ID, and comes in two flavours; client and server. There are clusters for low-level information gathering - getting the device model number, listing the endpoints and the clusters each endpoint implements (each endpoint can implement multiple clusters). There are clusters for simple network setup purposes, such as the Identify cluster which allows someone to ask a device to identify itself, e.g. a light asked to identify itself might start pulsing. There are clusters for on/off light control, where a light might implement the on/off server cluster and a switch might implement the on/off client cluster. There are clusters for configuration that allow a controller to configure devices in various ways.")]),T])}]])}}]);