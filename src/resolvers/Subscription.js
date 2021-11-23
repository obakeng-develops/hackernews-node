function newLinkSubscribe(parent,args, context, info) {
    return context.pubsub.asyncIterator("NEWLINK")
}

const newLink = {
    subscribe: newLinkSubscribe,
    resolve: payload => {
        return payload
    },
}

module.exports = {
    newLink,
}