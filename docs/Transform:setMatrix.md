<!--
category: reference
-->

Transform:setMatrix
===

Set the individual matrix components of a Transform, in column-major order.

    Transform:setMatrix(m11, m21, m31, m41, m12, m22, m23, m24, m13, m23, m33, m34, m41, m42, m43, m44)

### Arguments

- `number m11`
- `number m21`
- `number m31`
- `number m41`
- `number m12`
- `number m22`
- `number m32`
- `number m42`
- `number m13`
- `number m23`
- `number m33`
- `number m43`
- `number m14`
- `number m24`
- `number m34`
- `number m44`

### Returns

Nothing

---

    Transform:setMatrix(m)

### Arguments

- `table m` A table containing the matrix values (as above).

### Returns

Nothing

See also
---

- `Transform:getMatrix`
