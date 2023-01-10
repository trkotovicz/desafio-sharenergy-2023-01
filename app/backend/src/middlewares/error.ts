const errorMiddleware = (err: any, _req: any, res: any, _next: any): any => {
  const { name, message } = err

  if (name !== false) return res.status((Boolean(err.status)) || 500).json({ message })

  res.status(500).json({ message })
}

export default errorMiddleware
