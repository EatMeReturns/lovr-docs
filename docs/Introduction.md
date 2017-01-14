<!--
category: guide
-->

Welcome!
===

LÖVR is a framework for creating VR experiences with Lua.  It's great for small projects,
prototyping, creative coding, game jams, and more.

Why LÖVR?
---

LÖVR aims to be simple to use.  You can start making VR prototypes with just a few lines of code,
and there is no complicated editor to use, account to create, or compiling to do.

There is no cost to use LÖVR and it's open source, so you can use it for pretty much any
project without restrictions, and even modify the framework if you need to.

LÖVR is really fast.  It's written in C and uses LuaJIT, an incredibly fast Lua implementation.

Under the hood LÖVR uses OpenVR, so both the HTC Vive and the Oculus Rift are supported.  Support
for other headsets is also in the works.

Example
---

What does LÖVR look like?  Here's a simple example that draws a cube at the position of each
motion controller and makes them grow when the triggers are pressed:

```
function lovr.load()
  controllers = lovr.headset.getControllers()
  sizes = { 1, 1 }
end

function lovr.update()
  for i, controller in pairs(controllers) do
    sizes[i] = 1 + controller:getTrigger()
  end
end

function lovr.draw()
  for i, controller in pairs(controllers) do
    local x, y, z = controller:getPosition()
    lovr.graphics.cube('line', x, y, z, .2 * sizes[i], controller:getOrientation())
  end
end
```

Onward!
---

If you want to learn more about creating experiences with LÖVR, check out the [Getting
Started](Getting_Started) guide.  You can also explore everything LÖVR can do using the sidebar on
the left.  Or, if you're looking for a particular feature, you can type a keyword, like 'audio'.
