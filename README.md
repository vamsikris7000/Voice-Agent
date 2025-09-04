# AI Voice Agent with LiveKit

A professional-grade real-time voice conversation system that connects to LiveKit for audio streaming and uses OpenAI for intelligent responses.

## ✨ Features

- 🎤 **Automatic Microphone** - No manual enable/disable needed
- 🗣️ **Speech-to-Text** - Real-time voice transcription using browser APIs
- 🤖 **AI Conversation** - OpenAI-powered intelligent responses
- 🔊 **Text-to-Speech** - AI responses spoken back using speech synthesis
- 🔄 **2-Way Voice Chat** - Full conversational experience
- 🚀 **Professional Audio Management** - Robust track handling and recovery
- 📊 **Audio Health Monitoring** - Continuous quality and connection monitoring
- 🔧 **Automatic Recovery** - Self-healing audio tracks and connections

## 🛠️ Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Set OpenAI API Key (Optional)
For AI conversation features, you need an OpenAI API key:

**Option A: Environment Variable (Recommended)**
```bash
export OPENAI_API_KEY="your-actual-openai-api-key"
```

**Option B: Edit server.js**
Replace `"your-openai-api-key-here"` in `server.js` with your actual OpenAI API key.

**Note**: The system works without OpenAI for basic voice chat functionality.

### 3. Start the Server
```bash
node server.js
```

### 4. Open in Browser
Navigate to `http://localhost:3000`

## 🔄 How It Works

1. **Connect** - Click "Connect to Agent" to join LiveKit room
2. **Microphone Auto-Enables** - Your mic is automatically activated
3. **Start Speaking** - The system listens for your voice continuously
4. **AI Processing** - Your speech is transcribed and sent to OpenAI
5. **Voice Response** - AI response is spoken back to you
6. **Continuous Conversation** - The cycle repeats automatically
7. **Automatic Recovery** - System handles track disconnections and reconnections

## 🏗️ Architecture

### Frontend
- **LiveKit Client** - Real-time audio streaming
- **Speech Recognition API** - Voice-to-text conversion
- **Speech Synthesis API** - Text-to-voice conversion
- **Enhanced Track Management** - Multiple audio track handling

### Backend
- **Express Server** - API endpoints and static file serving
- **LiveKit Proxy** - Token generation and CloudFront integration
- **OpenAI Integration** - AI conversation processing
- **Track Recovery** - Audio track reconnection logic

## 📡 API Endpoints

- `GET /` - Serves the HTML interface
- `POST /generate-token` - Gets LiveKit connection token
- `POST /chat` - Processes AI conversation (requires OpenAI API key)
- `POST /request-audio-track` - Requests new audio tracks from agents

## 🔧 Technical Features

### Audio Management
- **Multiple Track Support** - Handles multiple audio streams simultaneously
- **Automatic Recovery** - Reconnects dropped audio tracks
- **Quality Optimization** - Dynamic audio constraints based on connection quality
- **Health Monitoring** - Continuous audio state verification

### Error Handling
- **Graceful Degradation** - Continues working with partial failures
- **Retry Logic** - Automatic reconnection attempts with exponential backoff
- **State Management** - Proper cleanup and resource management
- **User Feedback** - Clear status updates and error messages

## 📋 Requirements

- **Browser**: Modern browser with Speech Recognition API support
- **Audio**: Microphone access and audio playback capability
- **Network**: Stable internet connection for LiveKit streaming
- **Optional**: OpenAI API key for AI conversation features

## 🚀 Advanced Features

### Track Recovery
- **Automatic Reconnection** - Reconnects audio tracks when they drop
- **Health Monitoring** - Monitors audio playback every 3 seconds
- **Quality Adaptation** - Adjusts audio quality for poor connections
- **Resource Cleanup** - Proper cleanup of audio elements and streams

### Connection Quality
- **Real-time Monitoring** - Tracks connection quality changes
- **Dynamic Optimization** - Adjusts audio parameters for stability
- **Fallback Mechanisms** - Graceful handling of poor connections

## 🔍 Troubleshooting

### Common Issues
- **Speech Recognition**: Ensure microphone permissions are granted
- **AI Responses**: Check OpenAI API key is valid (if using AI features)
- **Audio Issues**: Verify browser supports required audio APIs
- **Connection Problems**: Check network stability and LiveKit service status

### Debug Information
- **Console Logs**: Detailed logging for track management and audio state
- **Status Updates**: Real-time status display in the UI
- **Error Messages**: Clear error descriptions and recovery suggestions

## 🎯 Use Cases

- **Customer Support** - AI-powered voice assistance
- **Voice Chat Applications** - Real-time communication systems
- **Interactive Voice Response** - Automated voice systems
- **Voice-Enabled Applications** - Hands-free user interfaces

## 🔮 Future Enhancements

- **Multi-language Support** - International voice recognition
- **Voice Biometrics** - Speaker identification and authentication
- **Advanced AI Models** - Integration with other AI services
- **Mobile Optimization** - Enhanced mobile device support
# Voice-Agent
