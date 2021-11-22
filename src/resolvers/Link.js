function postedBy(paretn, args, context) {
    return context.prisma.link.findUnique({ where: { id: parent.id } }).postedBy()
}

module.exports = {
    postedBy,
}